import { Component, ElementRef, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; 

@Component({
  selector: 'app-reunion-mentor',
  standalone: true,
  imports: [CommonModule, FormsModule], 
  templateUrl: './reunion-mentor.component.html',
  styleUrl: './reunion-mentor.component.css'
})
export class ReunionMentorComponent {
  @ViewChild('userVideo') userVideo!: ElementRef<HTMLVideoElement>;
  isCameraEnabled: boolean = true;
  isAudioEnabled: boolean = true;
  isChatOpen: boolean = false;
  chatMessages: string[] = [];
  newMessage: string = '';

  async ngOnInit() {
    await this.initializeMedia();
  }

  async initializeMedia() {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
      this.userVideo.nativeElement.srcObject = stream;
      this.userVideo.nativeElement.play();
    } catch (error) {
      console.error('Error accessing media devices.', error);
    }
  }

  toggleCamera() {
    this.isCameraEnabled = !this.isCameraEnabled;
    const stream = this.userVideo.nativeElement.srcObject as MediaStream;
    stream.getVideoTracks()[0].enabled = this.isCameraEnabled;
  }

  toggleAudio() {
    this.isAudioEnabled = !this.isAudioEnabled;
    const stream = this.userVideo.nativeElement.srcObject as MediaStream;
    stream.getAudioTracks()[0].enabled = this.isAudioEnabled;
  }

  toggleChat() {
    this.isChatOpen = !this.isChatOpen;
  }

  sendMessage() {
    if (this.newMessage.trim()) {
      this.chatMessages.push(this.newMessage);
      this.newMessage = '';
    }
  }

  ngOnDestroy() {
    const stream = this.userVideo.nativeElement.srcObject as MediaStream;
    if (stream) {
      stream.getTracks().forEach(track => track.stop());
    }
  }
}
