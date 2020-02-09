import {parseJsonSchemaToCommandDescription} from '@angular/cli/utilities/json-schema';

export class Medicine{
  id: number;
  title: string;
  description: string;
  strenght: string;

  constructor(id: number, title: string, description: string, strenght: string){
    this.id = id;
    this.title = title;
    this.description = description;
    this.strenght = strenght;
}
}