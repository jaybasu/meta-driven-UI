import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiService, UiSchema, UiElement } from './homepage.service';
import { HeaderComponent } from '../../shared/components/header/header.component';
import { SectionComponent } from '../../shared/components/section/section.component';
import { ButtonComponent } from '../../shared/components/button/button.component';
import { ErrorComponent } from '../../shared/components/error/error.component';

const componentMap: { [key: string]: any } = {
  header: HeaderComponent,
  section: SectionComponent,
  button: ButtonComponent,
  error: ErrorComponent,
};

@Component({
  selector: 'app-dynamic-ui',
  standalone: true,
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.scss',
  imports: [CommonModule],
})
export class DynamicUiComponent implements OnInit {

  @ViewChild('container', { read: ViewContainerRef })
  container!: ViewContainerRef;

  constructor(private uiService: UiService) {} // No need for ComponentFactoryResolver

  ngOnInit() {
    this.uiService.getUiSchema().subscribe((schema) => {
      this.renderUi(schema);
    });
  }

  renderUi(schema: UiSchema) {
    this.container.clear();
    schema.children.forEach((child) => this.createComponent(child));
  }

  createComponent(element: UiElement) {
    const componentType = componentMap[element.type];
    console.log(componentType);
    if (componentType) {
      console.log ("doneYes");
      // Directly create the component using ViewContainerRef
      const componentRef = this.container.createComponent(componentType);
      Object.assign(componentRef.instance as any, element);
    } else {
      console.warn(`Unknown component type: ${element.type}`);
    }
  }
}
