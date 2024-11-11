import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; 
import { AuthService } from '../../core/services/auth.service';
import { User } from '../../shared/models/user.model';

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

export class TestVocacionalesComponent implements OnInit {
  questions = [
    { text: '¿Disfrutas resolver problemas complejos?', options: ['Sí', 'No', 'Regularmente', 'Casi nunca'], category: 'Ciencia' },
    { text: '¿Te gusta trabajar en equipo para lograr un objetivo?', options: ['Sí', 'No', 'Regularmente', 'Casi nunca'], category: 'Trabajo en Equipo' },
    { text: '¿Te interesa aprender sobre ciencias y matemáticas?', options: ['Sí', 'No', 'Regularmente', 'Casi nunca'], category: 'Ciencia' },
    { text: '¿Prefieres trabajar en proyectos creativos, como arte o diseño?', options: ['Sí', 'No', 'Regularmente', 'Casi nunca'], category: 'Creatividad' },
    { text: '¿Te sientes cómodo hablando en público?', options: ['Sí', 'No', 'Regularmente', 'Casi nunca'], category: 'Comunicación' },
    { text: '¿Te gusta ayudar a las personas cuando tienen algún problema?', options: ['Sí', 'No', 'Regularmente', 'Casi nunca'], category: 'Servicio' },
    { text: '¿Te sientes motivado a asumir responsabilidades en el trabajo?', options: ['Sí', 'No', 'Regularmente', 'Casi nunca'], category: 'Liderazgo' },
    { text: '¿Prefieres actividades al aire libre?', options: ['Sí', 'No', 'Regularmente', 'Casi nunca'], category: 'Aire Libre' },
    { text: '¿Te resulta fácil adaptarte a cambios o situaciones nuevas?', options: ['Sí', 'No', 'Regularmente', 'Casi nunca'], category: 'Adaptabilidad' },
    { text: '¿Te interesa conocer sobre culturas e idiomas diferentes?', options: ['Sí', 'No', 'Regularmente', 'Casi nunca'], category: 'Cultura' },
    { text: '¿Te gustaría trabajar en un entorno de oficina?', options: ['Sí', 'No', 'Regularmente', 'Casi nunca'], category: 'Oficina' },
    { text: '¿Te interesa el campo de la salud y el bienestar?', options: ['Sí', 'No', 'Regularmente', 'Casi nunca'], category: 'Salud' },
    { text: '¿Te gustaría liderar un grupo o un proyecto?', options: ['Sí', 'No', 'Regularmente', 'Casi nunca'], category: 'Liderazgo' },
    { text: '¿Te gusta trabajar con niños o personas mayores?', options: ['Sí', 'No', 'Regularmente', 'Casi nunca'], category: 'Servicio' },
    { text: '¿Te sientes cómodo trabajando bajo presión?', options: ['Sí', 'No', 'Regularmente', 'Casi nunca'], category: 'Adaptabilidad' },
    { text: '¿Te interesa el emprendimiento y tener tu propio negocio?', options: ['Sí', 'No', 'Regularmente', 'Casi nunca'], category: 'Emprendimiento' }
  ];

  answers: string[] = [];
  result: string | null = null;
  resultC: string | null = null;
  isSubmitted: boolean = false;  

  constructor(private router: Router, private authService: AuthService) {}

  ngOnInit(): void {
    const currentUser = this.authService.getCurrentUser();
    if (currentUser?.vocationalTestResult) {
      this.resultC = `Categoría predilecta: ${currentUser.vocationalTestResult.category}`;
      this.result = currentUser.vocationalTestResult.description;
      this.isSubmitted = true;
    }
  }

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

    let description = '';
    switch (topCategory) {
      case 'Ciencia':
        description = 'Tienes afinidad por áreas científicas y analíticas, lo que se traduce en una profunda curiosidad por comprender los principios que rigen el mundo natural.';
        break;
      case 'Trabajo en Equipo':
        description = 'Disfrutas trabajar en equipo y colaborar con los demás, lo que resalta tu capacidad para comunicarte de manera efectiva y construir relaciones sólidas con tus compañeros.';
        break;
      case 'Creatividad':
        description = 'Tienes un interés por áreas creativas como el arte y diseño, lo que se manifiesta en tu aprecio por la estética y la expresión visual.';
        break;
      case 'Comunicación':
        description = 'Te sientes cómodo comunicándote y hablando en público, lo que revela una sólida confianza en tus habilidades de expresión y una facilidad para conectar con los demás.';
        break;
      case 'Servicio':
        description = 'Tienes afinidad por ayudar y servir a los demás, lo que demuestra tu empatía y compromiso con el bienestar de las personas que te rodean.';
        break;
      case 'Liderazgo':
        description = 'Te interesa asumir roles de liderazgo y responsabilidad, lo que demuestra tu deseo de influir positivamente en tu entorno y guiar a otros hacia el logro de metas comunes.';
        break;
      case 'Aire Libre':
        description = 'Prefieres actividades al aire libre o fuera de la oficina, lo que refleja tu aprecio por la naturaleza y un estilo de vida activo.';
        break;
      case 'Adaptabilidad':
        description = 'Tienes facilidad para adaptarte a nuevos entornos y situaciones, lo que te convierte en una persona flexible y resiliente.';
        break;
      case 'Cultura':
        description = 'Te interesa aprender sobre culturas e idiomas diferentes, lo que demuestra tu curiosidad y apertura hacia el mundo.';
        break;
      case 'Oficina':
        description = 'Prefieres trabajar en un entorno de oficina, lo que refleja tu aprecio por la estructura y la colaboración que este tipo de ambiente puede ofrecer.';
        break;
      case 'Salud':
        description = 'Tienes afinidad por la salud y el bienestar, lo que refleja tu compromiso con un estilo de vida equilibrado y saludable.';
        break;
      case 'Emprendimiento':
        description = 'Tienes interés en el emprendimiento y en tener tu propio negocio, lo que refleja tu deseo de innovar y crear algo significativo.';
        break;
      default:
        description = 'Intereses variados y equilibrados, lo que refleja una curiosidad amplia y un deseo de explorar diferentes áreas de conocimiento y experiencia.';
    }

    this.resultC = `Categoría predilecta: ${topCategory}`;
    this.result = description;
    this.isSubmitted = true;

    this.authService.updateVocationalTestResult(topCategory, description);
  }
}
