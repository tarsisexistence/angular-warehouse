import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Access, User } from '$core/shared/interfaces/user.interface';

@Component({
  selector: 'auth-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SignUpComponent implements OnInit {
  @Input()
  public user: User;
  @Output()
  private signUpEmitter: EventEmitter<Access>;
  @Output()
  private setCatchPhraseEmitter: EventEmitter<string>;
  @Output()
  private toggleAuthMethodEmitter: EventEmitter<void>;

  public signUpForm: FormGroup;
  public detailForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.signUpEmitter = new EventEmitter<Access>();
    this.setCatchPhraseEmitter = new EventEmitter<string>();
    this.toggleAuthMethodEmitter = new EventEmitter<void>();
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
        '',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(25),
          Validators.pattern('^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$')
        ]
      ]
    });

    this.detailForm = this.fb.group({
      catchPhrase: ['', [Validators.required, Validators.minLength(2)]]
    });
  }

  public signUp(form: FormGroup): void {
    if (form.invalid) {
      return;
    }

    const credentials: Access = {
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
