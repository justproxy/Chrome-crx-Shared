export default {
  product: 'Just Proxy',
  service: {
    refresh_tooltip: 'Refresh proxy status',
    register_remind: {
      message: 'Thank you for choosing premium service. Sign up now to ensure you can reinstall without worrying about membership.',
      button: 'Complete your account',
    },
    profile: {
      get_premium: 'Get Premium',
      upgrade: 'upgrade',
      early_adopter: "Early adopter, no need to pay to upgrade!",
      save_account: 'Save Account',
      dropdown: {
        android: 'Get Android App',
        login: 'Login to another account',
        cancel: 'Cancel subscription',
        refund: 'Refund',
        support: 'Support',
        buy_service: 'Get Premium',
        subscribe: 'Order/Subscribe',
        complete_account: 'Complete your account',
      },
      common_modal: {
        yes: 'Yes',
        no: 'No',
        ok: 'OK',
      },
      cancel_modal: {
        title: 'Cancel Premium subscription',
        description: 'We will not charge from your Paypal any more.'
      },
      refund_modal: {
        title: 'Cancel and refund',
        description: 'Your service will be cancelled and your Paypal will be refunded'
      },
      sent_modal: {
        title: 'Request sent',
        description: 'We will process your request in next 48 hours'
      },
      support_modal: {
        title: 'Support',
        description: 'Describe the problem you are having in detail. We do open and read every email.',
        email: 'hello@justproxy.io'
      },
      login_modal: {
        title: 'Are you sure you want to login to another account?',
        description: 'Current Premium account is not completed. You will not be able to login in back again.',
        yes: 'Yes',
        no: 'No'
      }
    },
  },
  location: {
    checking: 'checking',
    blocked: 'unreachable',
    premium: 'premium',
    free: 'free',
  },
  status: {
    visiting_from: 'You are visiting all websites from',
    off: 'Just Proxy is currently off.'
  },
  conflict: {
    found: 'Just Proxy cannot work while following extension(s) has control of your proxy settings.',
    resolve: 'Click to disable conflicting extension(s)'
  },
  rate: {
    works: {
      question: 'Does it work ?',
      yes: 'Yes, it works!',
      no: 'No, not really'
    },
    works_yes: {
      question: 'How about a rating on the Chrome Webstore, then?',
      yes: 'Ok, sure',
      no: 'No, thanks'
    },
    works_no: {
      question: 'Mind giving us some feedback ?',
      yes: 'Ok, sure',
      no: 'No, thanks'
    }
  },
  news: {
    android: {
      title: "Also available on Android!",
      approve: "Get it",
      deny: "Not interested",
    }
  },
  register: {
    header: 'Complete your account',
    message: 'Please complete your account to keep your membership even after reinstall',
    email: {
      label: 'Email',
      placeholder: 'Email'
    },
    password: {
      label: 'Password',
      placeholder: 'Password (min 6 characters)'
    },
    submit_button: 'Save',
  },
  login: {
    header: 'Log in',
    email: {
      label: 'Email',
      placeholder: 'Email'
    },
    password: {
      label: 'Password',
      placeholder: 'Password (minimum of 6 characters)'
    },
    submit_button: 'Log in',
    reset_link: 'Forget your password?',
    register_link: 'Sign up'
  },
  reset: {
    header: 'Reset your password',
    email: {
      label: 'Email',
      placeholder: 'Email'
    },
    send_button: 'Reset password',
    sent_message: 'An email with a reset code was sent to <b>{email}</b>',
    code: {
      label: 'Code',
      placeholder: 'Enter and verify the reset code'
    },
    password: {
      label: 'New password',
      placeholder: 'new password'
    },
    confirm_button: 'Reset',
    success_message: 'password updated successfully'
  },
  confirm: {
    header: 'Verify your email address',
    message: {
      header: 'One last step',
      body: 'Please enter 6 digits confirmation code we sent to <b>{email}</b>'
    },
    code: {
      label: 'Confirmation code',
      placeholder: 'Enter confirmation code'
    },
    submit_button: 'Submit',
    wrong_email: 'Not my email?',
    re_sign_up: 'Sign up again'
  },
  resender: {
    resend: 'Resend',
    sending: 'sending ...',
    done: 'sent',
    fail: 'unable to resend email, please try again later'
  },
  buy: {
    heading: 'Upgrade to Premium',
    more_locations: '{count} More Premium Locations',
    high_speed: 'Higher Speed & Lower Latency',
    money_back: '14 Days Money Back Guarantee',
    cancel_anytime: 'Cancel Anytime',
    monthly: '$5/month',
    yearly: '$50/year',
    order: 'Order Now',
    subscribe: 'Subscribe Now',
    toggle_subscribe: 'Subscribe',
    go_back: 'go back',
  },
  errors: {
    format: {
      EMAIL_REQUIRED: 'Please enter your email',
      EMAIL_INVALID: 'Please enter a valid email address',
      PASSWORD_REQUIRED: 'Please enter your password',
      PASSWORD_MIN_LENGTH: 'Minimum of 6 characters',
      RESET_CODE_REQUIRED: 'Please enter confirmation code',
      CONFIRM_CODE_REQUIRED: 'Please enter confirmation code'
    },
    api: {
      timeout: 'server error - please try again later',
      server: 'server error - please try again later',
      parse: 'server error - please try again later',
      not_authenticated: 'Please login first',
      taken: 'The email address is already signed up',
      email_not_found: 'The email address is not yet signed up',
      invalid_password: "The email and password you entered don't match.",
      email_confirmed: 'The email address is already confirmed',
      invalid_confirmation_code: 'Invalid confirmation code',
      invalid_reset_code: 'Invalid reset code',
      reset_code_expired: 'Expired reset code'
    }
  },
  notifications: {
    ack_subscription: {
      title: 'Thank you for choosing Just Proxy',
      message: 'You have unlocked all Premium features'
    },
    ack_payment: {
      title: 'Your purchase was successful',
      message: 'Thank you for choosing Just Proxy.'
    }
  }
}
