/**
 * CPD Safety Shield - Web Audio API Sound Engine
 * Provides synthesized cinematic audio effects:
 * - Sub-bass heat drone
 * - Dashboard Ting... Ting... chime
 * - Emergency car horn beeps (Beep... Beep... Beep...)
 * - Suspenseful heartbeat pulse
 * - Window motor & air release
 * - Dramatic emotional chord progression
 */

class AudioEngine {
  constructor() {
    this.ctx = null;
    this.isMuted = false;
    this.currentLoopInterval = null;
    this.droneGain = null;
    this.heartbeatInterval = null;
    this.activeVoice = null;
  }

  init() {
    if (!this.ctx) {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      this.ctx = new AudioContext();
    }
    if (this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  toggleMute() {
    this.isMuted = !this.isMuted;
    if (this.isMuted) {
      this.stopAll();
    }
    return !this.isMuted;
  }

  stopAll() {
    if (this.currentLoopInterval) {
      clearInterval(this.currentLoopInterval);
      this.currentLoopInterval = null;
    }
    if (this.heartbeatInterval) {
      clearInterval(this.heartbeatInterval);
      this.heartbeatInterval = null;
    }
    if (this.droneGain && this.ctx) {
      try {
        this.droneGain.gain.setValueAtTime(0, this.ctx.currentTime);
      } catch (e) {}
    }
    if (window.speechSynthesis) {
      window.speechSynthesis.cancel();
    }
  }

  // 1. Dashboard "Ting... Ting... Ting..." Chime (Scene 1 & 2)
  playDashboardTing() {
    if (this.isMuted) return;
    this.init();
    
    let count = 0;
    const playSingleTing = () => {
      if (this.isMuted || !this.ctx) return;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(1046.5, this.ctx.currentTime); // High C6
      osc.frequency.exponentialRampToValueAtTime(1318.5, this.ctx.currentTime + 0.08); // E6

      gain.gain.setValueAtTime(0.18, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.4);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start();
      osc.stop(this.ctx.currentTime + 0.45);
      count++;
    };

    playSingleTing();
    this.currentLoopInterval = setInterval(() => {
      if (count >= 5 || this.isMuted) {
        clearInterval(this.currentLoopInterval);
        return;
      }
      playSingleTing();
    }, 450);
  }

  // 2. Heatwave Ambient Sub-Bass Drone (Scene 1)
  playHeatDrone() {
    if (this.isMuted) return;
    this.init();

    const osc = this.ctx.createOscillator();
    const osc2 = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    const filter = this.ctx.createBiquadFilter();

    osc.type = 'sawtooth';
    osc.frequency.setValueAtTime(55, this.ctx.currentTime); // Low A1

    osc2.type = 'triangle';
    osc2.frequency.setValueAtTime(58, this.ctx.currentTime); // Slight detune for pulsing heat

    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(180, this.ctx.currentTime);

    gain.gain.setValueAtTime(0.01, this.ctx.currentTime);
    gain.gain.linearRampToValueAtTime(0.12, this.ctx.currentTime + 1.5);

    osc.connect(filter);
    osc2.connect(filter);
    filter.connect(gain);
    gain.connect(this.ctx.destination);

    this.droneGain = gain;
    osc.start();
    osc2.start();

    // Fade out after 6s
    gain.gain.linearRampToValueAtTime(0.001, this.ctx.currentTime + 7.5);
    osc.stop(this.ctx.currentTime + 8);
    osc2.stop(this.ctx.currentTime + 8);
  }

  // 3. Heartbeat Pulse for Suspense (Scene 3 & 4)
  playHeartbeat(bpm = 75) {
    if (this.isMuted) return;
    this.init();

    const intervalMs = (60 / bpm) * 1000;
    const playThump = () => {
      if (this.isMuted || !this.ctx) return;
      
      // Thump 1
      const osc1 = this.ctx.createOscillator();
      const gain1 = this.ctx.createGain();
      osc1.type = 'sine';
      osc1.frequency.setValueAtTime(65, this.ctx.currentTime);
      osc1.frequency.exponentialRampToValueAtTime(35, this.ctx.currentTime + 0.12);
      gain1.gain.setValueAtTime(0.35, this.ctx.currentTime);
      gain1.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.15);
      osc1.connect(gain1);
      gain1.connect(this.ctx.destination);
      osc1.start();
      osc1.stop(this.ctx.currentTime + 0.16);

      // Thump 2 (slightly softer, short delay)
      setTimeout(() => {
        if (this.isMuted || !this.ctx) return;
        const osc2 = this.ctx.createOscillator();
        const gain2 = this.ctx.createGain();
        osc2.type = 'sine';
        osc2.frequency.setValueAtTime(55, this.ctx.currentTime);
        osc2.frequency.exponentialRampToValueAtTime(30, this.ctx.currentTime + 0.14);
        gain2.gain.setValueAtTime(0.22, this.ctx.currentTime);
        gain2.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.16);
        osc2.connect(gain2);
        gain2.connect(this.ctx.destination);
        osc2.start();
        osc2.stop(this.ctx.currentTime + 0.18);
      }, 180);
    };

    playThump();
    this.heartbeatInterval = setInterval(playThump, intervalMs);
  }

  // 4. Car Horn Emergency Honk: "Beep... Beep... Beep!" (Scene 5 & 6)
  playEmergencyHorn() {
    if (this.isMuted) return;
    this.init();

    let count = 0;
    const playSingleHorn = () => {
      if (this.isMuted || !this.ctx) return;
      
      // Automotive dual-tone horn (400Hz & 500Hz)
      const oscLow = this.ctx.createOscillator();
      const oscHigh = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      oscLow.type = 'sawtooth';
      oscLow.frequency.setValueAtTime(392, this.ctx.currentTime); // G4

      oscHigh.type = 'sawtooth';
      oscHigh.frequency.setValueAtTime(494, this.ctx.currentTime); // B4

      gain.gain.setValueAtTime(0, this.ctx.currentTime);
      gain.gain.linearRampToValueAtTime(0.22, this.ctx.currentTime + 0.05);
      gain.gain.setValueAtTime(0.22, this.ctx.currentTime + 0.35);
      gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.42);

      oscLow.connect(gain);
      oscHigh.connect(gain);
      gain.connect(this.ctx.destination);

      oscLow.start();
      oscHigh.start();
      oscLow.stop(this.ctx.currentTime + 0.45);
      oscHigh.stop(this.ctx.currentTime + 0.45);
      count++;
    };

    playSingleHorn();
    this.currentLoopInterval = setInterval(() => {
      if (count >= 6 || this.isMuted) {
        clearInterval(this.currentLoopInterval);
        return;
      }
      playSingleHorn();
    }, 650);
  }

  // 5. Window Motor & Air Release Whoosh (Scene 4)
  playWindowVent() {
    if (this.isMuted) return;
    this.init();

    // Motor whir
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.type = 'triangle';
    osc.frequency.setValueAtTime(220, this.ctx.currentTime);
    osc.frequency.linearRampToValueAtTime(160, this.ctx.currentTime + 0.6);
    gain.gain.setValueAtTime(0.12, this.ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.7);
    osc.connect(gain);
    gain.connect(this.ctx.destination);
    osc.start();
    osc.stop(this.ctx.currentTime + 0.75);

    // Air release hiss (white noise buffer)
    const bufferSize = this.ctx.sampleRate * 1.2;
    const buffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) {
      data[i] = Math.random() * 2 - 1;
    }
    const noise = this.ctx.createBufferSource();
    noise.buffer = buffer;

    const filter = this.ctx.createBiquadFilter();
    filter.type = 'bandpass';
    filter.frequency.setValueAtTime(800, this.ctx.currentTime);
    filter.Q.setValueAtTime(3, this.ctx.currentTime);

    const noiseGain = this.ctx.createGain();
    noiseGain.gain.setValueAtTime(0.1, this.ctx.currentTime);
    noiseGain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 1.2);

    noise.connect(filter);
    filter.connect(noiseGain);
    noiseGain.connect(this.ctx.destination);

    noise.start();
    noise.stop(this.ctx.currentTime + 1.2);
  }

  // 6. Emotional Resolution Chord Progression (Scene 7 & 8)
  playEmotionalResolution() {
    if (this.isMuted) return;
    this.init();

    // Chord: D minor -> F Major -> C Major -> G Major
    const chords = [
      [293.66, 349.23, 440.0], // Dm (D4, F4, A4)
      [349.23, 440.0, 523.25], // F  (F4, A4, C5)
      [261.63, 329.63, 392.0], // C  (C4, E4, G4)
      [293.66, 370.0, 440.0]   // D  (Warm finish)
    ];

    chords.forEach((chord, index) => {
      const startTime = this.ctx.currentTime + (index * 1.8);
      chord.forEach(freq => {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();

        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, startTime);

        gain.gain.setValueAtTime(0.001, startTime);
        gain.gain.linearRampToValueAtTime(0.08, startTime + 0.3);
        gain.gain.exponentialRampToValueAtTime(0.001, startTime + 2.2);

        osc.connect(gain);
        gain.connect(this.ctx.destination);

        osc.start(startTime);
        osc.stop(startTime + 2.4);
      });
    });
  }

  // Play Scene Specific Audio Profile
  playSceneAudio(sceneIndex) {
    this.stopAll();
    if (this.isMuted) return;

    switch (sceneIndex) {
      case 0: // Scene 1: Scorching parking lot, rushing dad
        this.playHeatDrone();
        setTimeout(() => this.playDashboardTing(), 800);
        break;
      case 1: // Scene 2: CPD radar detecting baby in back seat
        this.playDashboardTing();
        break;
      case 2: // Scene 3: Meeting room, muted phone, rising suspense
        this.playHeartbeat(72);
        break;
      case 3: // Scene 4: Window 2cm drop, fan kicks in, heat venting
        this.playWindowVent();
        setTimeout(() => this.playEmergencyHorn(), 1200);
        break;
      case 4: // Scene 5: Security guard discovering child through 2cm gap
        this.playEmergencyHorn();
        this.playHeartbeat(105);
        break;
      case 5: // Scene 6: Bursting into meeting room, panic, chair falling
        this.playHeartbeat(130);
        break;
      case 6: // Scene 7: Emotional embrace in parking lot, tears of relief
        this.playEmotionalResolution();
        break;
      case 7: // Scene 8: Tech summary & safety architecture
        this.playEmotionalResolution();
        break;
    }
  }
}

window.AudioEngine = AudioEngine;
