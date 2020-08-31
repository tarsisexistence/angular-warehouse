import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Access, User } from 'core/shared/interfaces/user.interface';

@Component({
  selector: 'auth-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SignInComponent implements OnInit {
  @Input()
  public user: User;

  public signInForm: FormGroup;
  public detailForm: FormGroup;
  @Output()
  private readonly signInEmitter: EventEmitter<Access>;
  @Output()
  private readonly toggleAuthMethodEmitter: EventEmitter<void>;

  constructor(private readonly fb: FormBuilder) {
    this.signInEmitter = new EventEmitter<Access>();
    this.toggleAuthMethodEmitter = new EventEmitter<void>();
  }

  public ngOnInit(): void {
    this.signInForm = this.fb.group({
      email: ['', [Validators.required, Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')]],
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

  public signIn(form: FormGroup): void {
    if (form.invalid) {
      return;
    }

    const credentials: Access = {
      email: form.value.email,
      password: form.value.password
    };

    this.signInEmitter.emit(credentials);
  }

  public toggleAuthMethod(): void {
    this.toggleAuthMethodEmitter.emit();
  }
}
