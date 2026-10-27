import { Component } from '@angular/core';

interface Tarea {
  id: number;
  texto: string;
  completada: boolean;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  // Lista de tareas guardada en localStorage para que persista al recargar.
  tareas: Tarea[] = JSON.parse(localStorage.getItem('tareas-angular') || '[]');
  nuevaTarea = '';
  filtro: 'todas' | 'pendientes' | 'completadas' = 'todas';

  // Añade una nueva tarea al pulsar el botón o Enter.
  agregarTarea(): void {
    const texto = this.nuevaTarea.trim();
    if (texto === '') return;

    this.tareas.push({
      id: Date.now(),
      texto: texto,
      completada: false
    });

    this.nuevaTarea = '';
    this.guardar();
  }

  // Marca/desmarca una tarea como completada.
  toggleTarea(id: number): void {
    const tarea = this.tareas.find(t => t.id === id);
    if (tarea) {
      tarea.completada = !tarea.completada;
      this.guardar();
    }
  }

  // Elimina una tarea.
  eliminarTarea(id: number): void {
    this.tareas = this.tareas.filter(t => t.id !== id);
    this.guardar();
  }

  // Guarda en localStorage.
  guardar(): void {
    localStorage.setItem('tareas-angular', JSON.stringify(this.tareas));
  }

  // Devuelve las tareas según el filtro seleccionado.
  get tareasFiltradas(): Tarea[] {
    if (this.filtro === 'pendientes') {
      return this.tareas.filter(t => !t.completada);
    }
    if (this.filtro === 'completadas') {
      return this.tareas.filter(t => t.completada);
    }
    return this.tareas;
  }

  // Contadores para mostrar en la interfaz.
  get pendientes(): number {
    return this.tareas.filter(t => !t.completada).length;
  }

  get completadas(): number {
    return this.tareas.filter(t => t.completada).length;
  }
}
