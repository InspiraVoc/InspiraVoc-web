import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  private predefinedResponses: { question: string, answer: string }[] = [
    { question: '¿Qué es InspiraVoc?', answer: '¡Hola! InspiraVoc es una startup que transforma la orientación vocacional para universitarios, conectándose con expertos en diversas áreas profesionales a tráves de nuestra plataforma web. Ayudamos a los jóvenes a tomar decisiones fundamentales sobre su futuro para asegurar su éxito y satisfacción personal.' },
    { question: '¿Cómo funciona la prueba vocacional en esta plataforma?', answer: 'Nuestra prueba vocacional evalúa tus intereses, habilidades, valores y estilo de vida. Basado en tus respuestas, te proporcionamos recomendaciones de carreras profesionales que coincidan con tu perfil.' },
    { question: '¿Cómo puedo acceder a una asesoría personalizada con un profesional?', answer: 'Puedes acceder a asesorías personalizadas reservando una sesión con uno de nuestros mentores a través de la plataforma. Simplemente selecciona el profesional y elige la fecha y hora que mejor te convenga.' },
    { question: '¿Cómo eligen a los profesionales que brindan asesorías?', answer: 'Todos nuestros profesionales son expertos en sus áreas, con experiencia acreditada en orientación vocacional o en campos específicos. Pasan por un riguroso proceso de selección para garantizar calidad en las asesorías.' },
    { question: '¿Qué beneficios tiene realizar una asesoría personalizada con un profesional?', answer: 'La asesoría personalizada va más allá de los resultados de la prueba. En estas sesiones, el profesional te ayuda a entender mejor tus fortalezas y debilidades, te ofrece una visión actual del mercado laboral en áreas específicas, y te orienta sobre cómo desarrollar habilidades adicionales o realizar un cambio de carrera.' },

  ];

  constructor() { }

  getResponse(userInput: string): string {
    const found = this.predefinedResponses.find(item =>
      userInput.toLowerCase().includes(item.question.toLowerCase())
    );
    return found ? found.answer : 'Lo siento, no tengo una respuesta para eso.';
  }
}
