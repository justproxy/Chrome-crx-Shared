export default {
  product: 'Just Proxy',
  service: {
    refresh_tooltip: '�������� ������ ������',
    register_remind: {
      message: '������� ��� �� ������������ �������-�������. ����������������� ������, � �� ������ ������� ������������ ������ �������-��������.',
      button: '��� �������',
    },
    profile: {
      get_premium: '�������� �������',
      upgrade: '���������',
      early_adopter: "Early adopter, ��� ������������� � ������ ��� ��������!",
      save_account: '���������',
      dropdown: {
        android: '������� ���������� ��� Android',
        login: '����� ��� ������ ���������',
        cancel: '�������� ��������',
        refund: '�������',
        support: '���������',
        buy_service: '�������� �������',
        subscribe: '��������',
        complete_account: '������������������',
      },
      common_modal: {
        yes: '��',
        no: '���',
        ok: 'OK',
      },
      cancel_modal: {
        title: '�������� �������-��������',
        description: '�� ����� �� ����� ������� ������ � ������ PayPal �����.'
      },
      refund_modal: {
        title: '������ � �������',
        description: '���� �������� ����� ��������, � ������ �������� �� ��� PayPal ����.'
      },
      sent_modal: {
        title: '������ ���������',
        description: '�� ������� �� ��� ������ � ������� 48 �����'
      },
      support_modal: {
        title: '���������',
        description: '����������� �������� ������� ���� ��������. �� �������� �� ������ ���������� ���� ������',
        email: 'hello@justproxy.io'
      },
      login_modal: {
        title: '�� �������, ��� ������ ����� ��� ������ ������� �������?',
        description: '������� ������� ������� �� ��������. �� �� ������� ����� � ������� �����.',
        yes: '��',
        no: '���'
      }
    },
  },
  location: {
    checking: '��������',
    blocked: '�������������',
    premium: '�������',
    free: '���������',
  },
  status: {
    visiting_from: '������ �� ��������� ���-����� ��',
    off: 'Just Proxy ��������.'
  },
  conflict: {
    found: 'Just Proxy �� ����� ��������, ��� ��� ������ ���������� ��������� ������ � ��������� ������-��������.',
    resolve: '������� ��� ���������� ������������� ����������'
  },
  rate: {
    works: {
      question: '��������?',
      yes: '��, ��������!',
      no: '���, �� ������'
    },
    works_yes: {
      question: '��� �� ���� ����, ����� ������� ���������� � Chrome Webstore?',
      yes: '��, �������',
      no: '���, �������'
    },
    works_no: {
      question: '������ �� �� �������� ���� �����?',
      yes: '��, �������',
      no: '���, �������'
    }
  },
  news: {
    android: {
      title: "����� �������� ���������� ��� Android!",
      approve: "��������",
      deny: "�� ���������",
    }
  },
  register: {
    header: '�����������',
    message: '����������, ������� ������ ������ ��������:',
    email: {
      label: 'Email',
      placeholder: 'Email'
    },
    password: {
      label: '������',
      placeholder: '������ (������� 6 ��������)'
    },
    submit_button: '���������',
  },
  login: {
    header: '�����',
    email: {
      label: 'Email',
      placeholder: 'Email'
    },
    password: {
      label: '������',
      placeholder: '������ (������� 6 ��������)'
    },
    submit_button: '�����',
    reset_link: '������ ������?',
    register_link: '�����������'
  },
  reset: {
    header: '�������� ������',
    email: {
      label: 'Email',
      placeholder: 'Email'
    },
    send_button: '�������� ������',
    sent_message: '������ � ����� ��� ������ ������ ���� ���������� �� <b>{email}</b>',
    code: {
      label: '���',
      placeholder: '������� ��� ��� ������ ������'
    },
    password: {
      label: '����� ������',
      placeholder: '����� ������'
    },
    confirm_button: '��������',
    success_message: '������ ��� ������� ��������'
  },
  confirm: {
    header: '����������� ��� email',
    message: {
      header: '��������� ���',
      body: '����������, ������� ��� ������������� (6 ����) ������� �� ��������� �� <b>{email}</b>'
    },
    code: {
      label: '��� �������������',
      placeholder: '������� ��� �������������'
    },
    submit_button: '���������',
    wrong_email: '�� ��� email?',
    re_sign_up: '������������������ �����'
  },
  resender: {
    resend: '���������',
    sending: '�������� ...',
    done: '����������',
    fail: '� ������ ������ ���������� ��������� ������, ��������� ������� �����'
  },
  buy: {
    heading: '�������� �� �������',
    more_locations: '{count} ���. �������-��������',
    high_speed: '�������� ���� & �������� ����',
    money_back: '�������� �������� ����� � ������� 14 ����',
    cancel_anytime: '����������� �������� � ����� �����',
    monthly: '$5/�����',
    yearly: '$50/���',
    order: '������ ������',
    subscribe: '����������� ������',
    toggle_subscribe: '�����������',
    go_back: '�����',
  },
  errors: {
    format: {
      EMAIL_REQUIRED: '����������, ������� ��� ����� ����������� �����',
      EMAIL_INVALID: '����������, ������� ���������� ����� ����������� �����',
      PASSWORD_REQUIRED: '����������, ������� ��� ������',
      PASSWORD_MIN_LENGTH: '����������� ������ - 6 ��������',
      RESET_CODE_REQUIRED: '����������, ������� ��� �������������',
      CONFIRM_CODE_REQUIRED: '����������, ������� ��� �������������'
    },
    api: {
      timeout: '������ ������� - ����������, ��������� ������� �����',
      server: '������ ������� - ����������, ��������� ������� �����',
      parse: '������ ������� - ����������, ��������� ������� �����',
      not_authenticated: '����������, ������� �������',
      taken: '����� ����������� ����� ��� ���������������',
      email_not_found: '����� ����������� ����� �� ���������������',
      invalid_password: "��������� ����� ����������� ����� � ������ �� ���������.",
      email_confirmed: '����� ����������� ����� ��� �����������',
      invalid_confirmation_code: '�������� ��� �������������',
      invalid_reset_code: '�������� ��� ������',
      reset_code_expired: '���� �������� ���� ������ �����'
    }
  },
  notifications: {
    ack_subscription: {
      title: '������� �� ����� Just Proxy',
      message: '������ ��� �������� ��� �������-�������'
    },
    ack_payment: {
      title: '��� ������ ������� ������',
      message: '������� �� ����� Just Proxy.'
    }
  }
}
