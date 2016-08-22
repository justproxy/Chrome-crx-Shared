export default {
  product: 'Just Proxy',
  service: {
    refresh_tooltip: 'Обновить статус прокси',
    register_remind: {
      message: 'Спасибо вам за приобретение премиум-статуса. Зарегистрируйтесь сейчас, и вы всегда сможете пользоваться нашими премиум-услугами.',
      button: 'Мой аккаунт',
    },
    profile: {
      get_premium: 'Получить премиум',
      upgrade: 'улучшение',
      early_adopter: "Early adopter, нет необходимости в оплате для апгрейда!",
      save_account: 'Сохранить',
      dropdown: {
        android: 'Скачать приложение для Android',
        login: 'Войти под другим аккаунтом',
        cancel: 'Отменить подписку',
        refund: 'Возврат',
        support: 'Поддержка',
        buy_service: 'Получить премиум',
        subscribe: 'Подписка',
        complete_account: 'Зарегистрироваться',
      },
      common_modal: {
        yes: 'Да',
        no: 'Нет',
        ok: 'OK',
      },
      cancel_modal: {
        title: 'Отменить премиум-подписку',
        description: 'Мы более не будем снимать деньги с вашего PayPal счета.'
      },
      refund_modal: {
        title: 'Отмена и возврат',
        description: 'Ваша подписка будет отменена, а деньги вернутся на ваш PayPal счет.'
      },
      sent_modal: {
        title: 'Запрос отправлен',
        description: 'Мы ответим на ваш запрос в течение 48 часов'
      },
      support_modal: {
        title: 'Поддержка',
        description: 'Максимально подробно опишите вашу проблему. Мы отвечаем на каждое полученное нами письмо',
        email: 'hello@justproxy.io'
      },
      login_modal: {
        title: 'Вы уверены, что хотите войти под другой учетной записью?',
        description: 'Текущий премиум аккаунт не завершен. Вы не сможете войти в систему снова.',
        yes: 'Да',
        no: 'Нет'
      }
    },
  },
  location: {
    checking: 'проверка',
    blocked: 'заблокировано',
    premium: 'премиум',
    free: 'бесплатно',
  },
  status: {
    visiting_from: 'Сейчас вы посещаете веб-сайты из',
    off: 'Just Proxy выключен.'
  },
  conflict: {
    found: 'Just Proxy не может работать, так как другие расширения блокируют доступ к найтрокам прокси-серверов.',
    resolve: 'Нажмите для отключения конфликтующих расширений'
  },
  rate: {
    works: {
      question: 'Работает?',
      yes: 'Да, работает!',
      no: 'Нет, не совсем'
    },
    works_yes: {
      question: 'Как на счет того, чтобы оценить расширение в Chrome Webstore?',
      yes: 'Да, конечно',
      no: 'Нет, спасибо'
    },
    works_no: {
      question: 'Хотели бы вы отсавить свой отзыв?',
      yes: 'Да, конечно',
      no: 'Нет, спасибо'
    }
  },
  news: {
    android: {
      title: "Также доступно приложение для Android!",
      approve: "Получить",
      deny: "Не интересно",
    }
  },
  register: {
    header: 'Регистрация',
    message: 'Пожалуйста, укажите данные вашего аккаунта:',
    email: {
      label: 'Email',
      placeholder: 'Email'
    },
    password: {
      label: 'Пароль',
      placeholder: 'Пароль (минимум 6 символов)'
    },
    submit_button: 'Сохранить',
  },
  login: {
    header: 'Войти',
    email: {
      label: 'Email',
      placeholder: 'Email'
    },
    password: {
      label: 'Пароль',
      placeholder: 'Пароль (минимум 6 символов)'
    },
    submit_button: 'Войти',
    reset_link: 'Забыли пароль?',
    register_link: 'Регистрация'
  },
  reset: {
    header: 'Сбросить пароль',
    email: {
      label: 'Email',
      placeholder: 'Email'
    },
    send_button: 'Сбросить пароль',
    sent_message: 'Письмо с кодом для сброса пароля было отправлено на <b>{email}</b>',
    code: {
      label: 'Код',
      placeholder: 'Введите код для сброса пароля'
    },
    password: {
      label: 'Новый пароль',
      placeholder: 'новый пароль'
    },
    confirm_button: 'Сбросить',
    success_message: 'пароль был успешно обновлен'
  },
  confirm: {
    header: 'Подтвердите ваш email',
    message: {
      header: 'Последний шаг',
      body: 'Пожалуйста, введите код подтверждения (6 цифр) который мы отправили на <b>{email}</b>'
    },
    code: {
      label: 'Код подтверждения',
      placeholder: 'Введите код подтверждения'
    },
    submit_button: 'Отправить',
    wrong_email: 'Не мой email?',
    re_sign_up: 'Зарегистрироваться снова'
  },
  resender: {
    resend: 'Отправить',
    sending: 'отправка ...',
    done: 'отправлено',
    fail: 'в данный момент невозможно отправить письмо, повторите попытку позже'
  },
  buy: {
    heading: 'Улучшить до Премиум',
    more_locations: '{count} доп. Премиум-серверов',
    high_speed: 'Скорость выше & Задержки ниже',
    money_back: 'Гарантия возврата денег в течении 14 дней',
    cancel_anytime: 'Возможность отменить в любое время',
    monthly: '$5/месяц',
    yearly: '$50/год',
    order: 'Купить сейчас',
    subscribe: 'Подписаться сейчас',
    toggle_subscribe: 'Подписаться',
    go_back: 'Назад',
  },
  errors: {
    format: {
      EMAIL_REQUIRED: 'Пожалуйста, введите ваш адрес электронной почты',
      EMAIL_INVALID: 'Пожалуйста, введите нормальный адрес электронной почты',
      PASSWORD_REQUIRED: 'Пожалуйста, введите ваш пароль',
      PASSWORD_MIN_LENGTH: 'Минимальная длинна - 6 символов',
      RESET_CODE_REQUIRED: 'Пожалуйста, введите код подтверждения',
      CONFIRM_CODE_REQUIRED: 'Пожалуйста, введите код подтверждения'
    },
    api: {
      timeout: 'ошибка сервера - пожалуйста, повторите попытку позже',
      server: 'ошибка сервера - пожалуйста, повторите попытку позже',
      parse: 'ошибка сервера - пожалуйста, повторите попытку позже',
      not_authenticated: 'Пожалуйста, сначала войдите',
      taken: 'Адрес электронной почты уже зарегистрирован',
      email_not_found: 'Адрес электронной почты не зарегистрирован',
      invalid_password: "Введенные адрес электронной почты и пароль не совпадают.",
      email_confirmed: 'Адрес электронной почты уже подтвержден',
      invalid_confirmation_code: 'Неверный код подтверждения',
      invalid_reset_code: 'Неверный код сброса',
      reset_code_expired: 'Срок действия кода сброса истек'
    }
  },
  notifications: {
    ack_subscription: {
      title: 'Спасибо за выбор Just Proxy',
      message: 'Теперь вам доступны все премиум-функции'
    },
    ack_payment: {
      title: 'Ваш платеж успешно прошел',
      message: 'Спасибо за выбор Just Proxy.'
    }
  }
}
