import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter
} from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators
} from '@angular/forms';

import { Credentials } from '../interfaces/credentials.interface';
import { User } from '../interfaces/user.interface';

@Component({
  selector: 'auth-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SignUpComponent implements OnInit {
  public signUpForm: FormGroup;
  public detailForm: FormGroup;

  @Input()
  public user: User;
  @Output()
  public signUpEmitter: EventEmitter<Credentials> = new EventEmitter<Credentials>();
  @Output()
  public setCatchPhraseEmitter: EventEmitter<string> = new EventEmitter<string>();
  @Output()
  public toggleAuthMethodEmitter: EventEmitter<void> = new EventEmitter<void>();

  constructor(private fb: FormBuilder) {
  }

  public ngOnInit(): void {
    this.signUpForm = this.fb.group({
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

  public signUp(form: FormGroup): void {
    if (form.invalid) {
      return;
    }

    const credentials: Credentials = {
      email: form.value.email,
      password: form.value.password
    };

    this.signUpEmitter.emit(credentials);
  }

  public setCatchPhrase(catchPhrase: string): void {
    this.setCatchPhraseEmitter.emit(catchPhrase);
  }

  public toggleAuthMethod(): void {
    this.toggleAuthMethodEmitter.emit();
  }
}
