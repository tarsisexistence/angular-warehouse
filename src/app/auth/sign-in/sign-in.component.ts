import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output
} from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators
} from '@angular/forms';

import { Credentials } from '../interfaces/credentials.interface';
import { User } from '../interfaces/user.interface';

@Component({
  selector: 'auth-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SignInComponent implements OnInit {
  public signInForm: FormGroup;
  public detailForm: FormGroup;

  @Input()
  public user: User;
  @Output()
  public signInEmitter: EventEmitter<Credentials> = new EventEmitter<Credentials>();
  @Output()
  public toggleAuthMethodEmitter: EventEmitter<void> = new EventEmitter<void>();

  constructor(private fb: FormBuilder) {
  }

  public ngOnInit(): void {
    this.signInForm = this.fb.group({
      email: [
        '',
        [
          Validators.required,
          Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
        ]
      ],
      password: [
        '', [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(25),
          Validators.pattern('^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$')
        ]
      ]
    });

    this.detailForm = this.fb.group({
      catchPhrase: [
        '', [
          Validators.required,
          Validators.minLength(2)
        ]
      ]
    });
  }

  public signIn(form: FormGroup): void {
    if (form.invalid) {
      return;
    }

    const credentials: Credentials = {
      email: form.value.email,
      password: form.value.password
    };

    this.signInEmitter.emit(credentials);
  }

  public toggleAuthMethod(): void {
    this.toggleAuthMethodEmitter.emit();
  }
}
