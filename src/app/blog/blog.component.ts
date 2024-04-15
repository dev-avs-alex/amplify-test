import { Component } from '@angular/core';
import { generateClient, type Client } from 'aws-amplify/api';
import * as mutations from '../../graphql/mutations';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators
} from '@angular/forms';
import { Blog } from '../../API';


@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.scss'
})
export class BlogComponent {
  public createForm: FormGroup;
  public client: Client;

  constructor(private fb: FormBuilder) {
    this.createForm = this.fb.group({
      name: ['', Validators.required],
      // test: ['', Validators.required],
      // content: ['', Validators.required]
    });
    this.client = generateClient();
  }
  public async onCreate(blog: Blog) {
    try {
      const response = await this.client.graphql({
        query: mutations.createBlog,
        variables: {
          input: blog
        }
      });
      console.log('item created!', response);
      this.createForm.reset();
    } catch (e) {
      console.log('error creating todo...', e);
    }
  }
}

