import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; 

type Category = 'Ciencia' | 'Trabajo en Equipo' | 'Creatividad' | 'Comunicación' | 'Servicio' | 'Liderazgo' 
| 'Aire Libre' | 'Adaptabilidad' | 'Cultura' | 'Oficina' | 'Salud' | 'Emprendimiento';

const scores: Record<Category, number> = {
  Ciencia: 0,
  'Trabajo en Equipo': 0,
  Creatividad: 0,
  Comunicación: 0,
  Servicio: 0,
  Liderazgo: 0,
  'Aire Libre': 0,
  Adaptabilidad: 0,
  Cultura: 0,
  Oficina: 0,
  Salud: 0,
  Emprendimiento: 0,
};

@Component({
  selector: 'app-test-vocacionales',
  standalone: true,
  templateUrl: './testvocacionales.component.html',
  styleUrls: ['./testvocacionales.component.css'],
  imports: [CommonModule, FormsModule] 
})

export class TestVocacionalesComponent {
  
  questions = [
    { text: '¿Disfrutas resolver problemas complejos?', 
    options: ['Sí', 'No', 'Regularmente', 'Casi nunca'], category: 'Ciencia' },
    { text: '¿Te gusta trabajar en equipo para lograr un objetivo?',
    options: ['Sí', 'No', 'Regularmente', 'Casi nunca'], category: 'Trabajo en Equipo' },
    { text: '¿Te interesa aprender sobre ciencias y matemáticas?', 
    options: ['Sí', 'No', 'Regularmente', 'Casi nunca'], category: 'Ciencia' },
    { text: '¿Prefieres trabajar en proyectos creativos, como arte o diseño?', 
    options: ['Sí', 'No', 'Regularmente', 'Casi nunca'], category: 'Creatividad' },
    { text: '¿Te sientes cómodo hablando en público?', 
    options: ['Sí', 'No', 'Regularmente', 'Casi nunca'], category: 'Comunicación' },
    { text: '¿Te gusta ayudar a las personas cuando tienen algún problema?', 
    options: ['Sí', 'No', 'Regularmente', 'Casi nunca'], category: 'Servicio' },
    { text: '¿Te sientes motivado a asumir responsabilidades en el trabajo?', 
    options: ['Sí', 'No', 'Regularmente', 'Casi nunca'], category: 'Liderazgo' },
    { text: '¿Prefieres actividades al aire libre?', 
    options: ['Sí', 'No', 'Regularmente', 'Casi nunca'], category: 'Aire Libre' },
    { text: '¿Te resulta fácil adaptarte a cambios o situaciones nuevas?', 
    options: ['Sí', 'No', 'Regularmente', 'Casi nunca'], category: 'Adaptabilidad' },
    { text: '¿Te interesa conocer sobre culturas e idiomas diferentes?',
    options: ['Sí', 'No', 'Regularmente', 'Casi nunca'], category: 'Cultura' },
    { text: '¿Te gustaría trabajar en un entorno de oficina?', 
    options: ['Sí', 'No', 'Regularmente', 'Casi nunca'], category: 'Oficina' },
    { text: '¿Te interesa el campo de la salud y el bienestar?', 
    options: ['Sí', 'No', 'Regularmente', 'Casi nunca'], category: 'Salud' },
    { text: '¿Te gustaría liderar un grupo o un proyecto?', 
    options: ['Sí', 'No', 'Regularmente', 'Casi nunca'], category: 'Liderazgo' },
    { text: '¿Te gusta trabajar con niños o personas mayores?', 
    options: ['Sí', 'No', 'Regularmente', 'Casi nunca'], category: 'Servicio' },
    { text: '¿Te sientes cómodo trabajando bajo presión?', 
    options: ['Sí', 'No', 'Regularmente', 'Casi nunca'], category: 'Adaptabilidad' },
    { text: '¿Te interesa el emprendimiento y tener tu propio negocio?', 
    options: ['Sí', 'No', 'Regularmente', 'Casi nunca'], category: 'Emprendimiento' }
  ];
  
  answers: string[] = [];
  result: string | null = null;
  resultC: string | null = null;
  isSubmitted: boolean = false;  

  constructor(private router: Router) {}

  onSubmit() {
    for (const key in scores) {
      scores[key as Category] = 0;
    }

    this.questions.forEach((question, index) => {
      const answer = this.answers[index];
      let points = 0;
      if (answer === 'Sí') {
        points = 3;
      } else if (answer === 'Regularmente') {
        points = 2;
      } else if (answer === 'Casi nunca') {
        points = 1;
      }
      scores[question.category as Category] += points;
    });
    const topCategory = Object.keys(scores).reduce((a, b) => (scores[a as Category] > scores[b as Category] ? a : b)) as Category;
    
    switch (topCategory) {
      case 'Ciencia':
        this.resultC = 'Categoría predilecta: Ciencia';
        this.result ='Tienes afinidad por áreas científicas y analíticas, lo que se traduce en una profunda curiosidad por comprender los principios que rigen el mundo natural. Esta inclinación no solo te lleva a disfrutar del aprendizaje de disciplinas como la biología, la química, la física y las matemáticas, sino que también te motiva a aplicar métodos de investigación rigurosos para resolver problemas complejos. Tu capacidad para analizar datos y extraer conclusiones significativas te convierte en una persona con un enfoque metódico, que aprecia la lógica y el razonamiento crítico. ';
        break;
      case 'Trabajo en Equipo':
        this.resultC = 'Categoría predilecta: Trabajo en Equipo';
        this.result = 'Disfrutas trabajar en equipo y colaborar con los demás, lo que resalta tu capacidad para comunicarte de manera efectiva y construir relaciones sólidas con tus compañeros. Valoras la diversidad de ideas y perspectivas que cada miembro del equipo aporta, lo que enriquece el resultado final y genera un ambiente de trabajo dinámico.  Te sientes motivado por la sinergia que se crea al unir fuerzas con otros, ya que crees firmemente que el trabajo conjunto puede llevar a soluciones más innovadoras y eficaces. ';
        break;
      case 'Creatividad':
        this.resultC = 'Categoría predilecta: Creatividad';
        this.result = 'Tienes un interés por áreas creativas como el arte y diseño, lo que se manifiesta en tu aprecio por la estética y la expresión visual. Esta inclinación no solo te motiva a explorar diferentes formas de arte, ya sea pintura, escultura, fotografía o diseño gráfico, sino que también te impulsa a experimentar con diversas técnicas y estilos que te permitan plasmar tus ideas y emociones de manera única. Tu curiosidad por el arte y el diseño te lleva a buscar inspiración en diversas fuentes, desde la naturaleza y la arquitectura hasta la cultura y la historia. Disfrutas de los procesos creativos, donde la imaginación se convierte en un vehículo para comunicar conceptos y contar historias.';
        break;
      case 'Comunicación':
        this.resultC = 'Categoría predilecta: Comunicación';
        this.result = 'Te sientes cómodo comunicándote y hablando en público, lo que revela una sólida confianza en tus habilidades de expresión y una facilidad para conectar con los demás. Esta habilidad te permite compartir tus ideas y pensamientos de manera clara y persuasiva, lo que es especialmente valioso en entornos académicos, profesionales o sociales. Disfrutas la oportunidad de interactuar con otros, ya sea para presentar un proyecto, liderar una discusión o participar en un debate.';
        break;
      case 'Servicio':
        this.resultC = 'Categoría predilecta: Servicio';
        this.result = 'Tienes afinidad por ayudar y servir a los demás, lo que demuestra tu empatía y compromiso con el bienestar de las personas que te rodean. Esta inclinación te lleva a buscar oportunidades para hacer una diferencia en la vida de otros, ya sea a través de actos de bondad cotidianos, voluntariado en tu comunidad o involucrándote en causas sociales que resuenan contigo. Te sientes motivado por el impacto positivo que puedes tener en la comunidad y, a menudo, buscas formas innovadoras de contribuir y crear cambios significativos. Además, esta afinidad por servir a los demás te impulsa a trabajar en entornos colaborativos y de equipo, donde el bienestar colectivo es una prioridad. ';
        break;
      case 'Liderazgo':
        this.resultC = 'Categoría predilecta: Liderazgo';
        this.result = 'Te interesa asumir roles de liderazgo y responsabilidad, lo que demuestra tu deseo de influir positivamente en tu entorno y guiar a otros hacia el logro de metas comunes. Esta inclinación no solo refleja tu autoconfianza, sino también tu compromiso con el desarrollo personal y profesional, así como con el bienestar de quienes te rodean. Te gusta tomar la iniciativa y enfrentar desafíos, y consideras que liderar es una oportunidad para aprender y crecer, tanto para ti como para tu equipo. Además, disfrutas establecer una visión clara y trabajar junto a otros para convertir esa visión en realidad, gestionando recursos y conflictos de manera efectiva.';
        break;
      case 'Aire Libre':
        this.resultC = 'Categoría predilecta: Aire Libre';
        this.result = 'Prefieres actividades al aire libre o fuera de la oficina, lo que refleja tu aprecio por la naturaleza y un estilo de vida activo. Esta inclinación te permite conectarte con el entorno y disfrutar de experiencias que estimulan tanto tu cuerpo como tu mente. Ya sea practicando deportes, realizando caminatas, explorando nuevos lugares o simplemente disfrutando de un día en el parque, estas actividades te proporcionan una sensación de libertad y renovación. Tu preferencia por el aire libre también puede ser una forma de escapar del estrés diario y recargar energías, permitiéndote ser más creativo y productivo en otros aspectos de tu vida. Valoras el tiempo en la naturaleza y el impacto positivo que tiene en tu bienestar físico y emocional.';
        break;
      case 'Adaptabilidad':
        this.resultC = 'Categoría predilecta: Adaptabilidad';
        this.result = 'Tienes facilidad para adaptarte a nuevos entornos y situaciones, lo que te convierte en una persona flexible y resiliente. Esta habilidad te permite enfrentar cambios y desafíos con una actitud positiva, sin sentirte abrumado por lo desconocido. Te sientes cómodo explorando nuevas ideas, culturas y formas de trabajar, lo que no solo enriquece tu experiencia personal, sino que también te permite aprender y crecer constantemente. Tu capacidad para ajustarte rápidamente a diferentes contextos te hace un colaborador valioso en equipos diversos y dinámicos. Puedes integrarte fácilmente en nuevos grupos y construir relaciones efectivas con compañeros de trabajo, independientemente de sus antecedentes o estilos de comunicación. Esta adaptabilidad también te permite manejar imprevistos y cambios de planes con tranquilidad, convirtiéndote en una persona confiable en situaciones que requieren una respuesta ágil.';
        break;
      case 'Cultura':
        this.resultC = 'Categoría predilecta: Cultura';
        this.result = 'Te interesa aprender sobre culturas e idiomas diferentes, lo que demuestra tu curiosidad y apertura hacia el mundo. Esta pasión por la diversidad cultural te lleva a explorar tradiciones, costumbres y formas de vida que pueden enriquecer tu perspectiva y comprensión de la humanidad. Valoras las historias y experiencias que cada cultura aporta, lo que te permite desarrollar una apreciación más profunda por la pluralidad del mundo. Tu interés por los idiomas no solo es un medio para comunicarte con personas de diferentes orígenes, sino también una puerta de entrada a entender mejor su forma de pensar y de vivir. Aprender nuevos idiomas te ofrece la oportunidad de sumergirte en la cultura de esos lugares, acceder a su literatura, música y arte, y conectarte con personas de maneras significativas. ';
        break;
      case 'Oficina':
        this.resultC = 'Categoría predilecta: Oficina';
        this.result = 'Prefieres trabajar en un entorno de oficina, lo que refleja tu aprecio por la estructura y la colaboración que este tipo de ambiente puede ofrecer. Para ti, una oficina proporciona un espacio dedicado donde puedes concentrarte y ser productivo, rodeado de compañeros que comparten objetivos y responsabilidades similares. Este entorno te permite beneficiarte de la interacción cara a cara, facilitando la comunicación y el intercambio de ideas. Valoras la posibilidad de colaborar en proyectos, participar en reuniones y recibir retroalimentación inmediata, lo que enriquece tu trabajo diario. ';
        break;
      case 'Salud':
        this.resultC = 'Categoría predilecta: Salud';
        this.result = 'Tienes afinidad por la salud y el bienestar, lo que refleja tu compromiso con un estilo de vida equilibrado y saludable. Esta inclinación te lleva a explorar diversas prácticas que promueven el bienestar físico, mental y emocional. Eres consciente de la importancia de cuidar de tu cuerpo y tu mente, y te esfuerzas por adoptar hábitos saludables, como una alimentación nutritiva, ejercicio regular y técnicas de manejo del estrés. Tu interés en la salud y el bienestar también puede impulsarte a informarte sobre temas relacionados, como la nutrición, la salud mental, la meditación y el autocuidado. Te gusta compartir este conocimiento con los demás, motivándolos a adoptar estilos de vida más saludables y a cuidar de sí mismos. Esta capacidad de inspirar y apoyar a otros en su camino hacia el bienestar es una de tus fortalezas.';
        break;
      case 'Emprendimiento':
        this.resultC = 'Categoría predilecta: Emprendimiento';
        this.result = 'Tienes interés en el emprendimiento y en tener tu propio negocio, lo que refleja tu deseo de innovar y crear algo significativo. Esta pasión por el emprendimiento te impulsa a explorar nuevas ideas, identificar oportunidades en el mercado y desarrollar soluciones creativas para satisfacer necesidades específicas. Te entusiasma la posibilidad de construir un proyecto desde cero, lo que te permite expresar tu visión y poner en práctica tus habilidades. Tu interés por tener un negocio propio va más allá de la simple creación de una empresa; también incluye el deseo de asumir riesgos calculados y aprender de cada experiencia. Eres consciente de los desafíos que conlleva emprender, pero ves en ellos oportunidades de crecimiento y aprendizaje. Te motiva la idea de tomar decisiones estratégicas y liderar un equipo hacia el éxito, además de la satisfacción de ver cómo tus ideas cobran vida y tienen un impacto en la comunidad.';
        break;
      default:
        this.result = 'Intereses variados y equilibrados, lo que refleja una curiosidad amplia y un deseo de explorar diferentes áreas de conocimiento y experiencia. Esta diversidad en tus intereses te permite disfrutar de una vida rica y dinámica, donde puedes aprender y crecer continuamente. Te entusiasma la idea de probar cosas nuevas, desde actividades artísticas y deportivas hasta la lectura de géneros literarios variados o la exploración de temas científicos y tecnológicos. Tu capacidad para equilibrar estos intereses no solo te enriquece como persona, sino que también te ayuda a mantener un enfoque holístico en tu vida. Disfrutas alternar entre actividades que estimulan tu mente, como aprender sobre filosofía o historia, y aquellas que te permiten liberar energía, como el ejercicio o los deportes al aire libre. Este equilibrio te permite desarrollar habilidades en múltiples áreas, haciendo de ti una persona versátil y adaptable.';
    }
    this.isSubmitted = true; 
  }
}