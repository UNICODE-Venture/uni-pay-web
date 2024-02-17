# uni-pay

# Moyasar Payment by **UNICODE Team**

A library for making online payment by using Moyasar payment gateway developed by **UNICODE Team**.

# **Features support**

![Payment](https://raw.githubusercontent.com/UNICODE-Venture/unicode-moyasar/main/assets/images/cards.png)

- **Card support (_mada_, visa, mastercard)**
- **Apple Pay**
- **stc pay**

![Payment View](https://raw.githubusercontent.com/UNICODE-Venture/unicode-moyasar/main/assets/screenshots/sc.png)

## Getting started

```typescript
UniPay.__initiateUniPayment({
  uniPayConfig: new UniPayConfig({
    psKey: "pk_test_key",
    sKey: "sk_test_key",
    environment: UniPayEnv.staging,
    redirectUrl: "https://your-website.com",
    totalAmountWithVat: 150.45,
    businessName: "Your company name",
    description: "Description of the order",
    locale: UniPayLocale.ar,
  }),
});
```

# Apple pay Setup

- In order to use Apple Pay within your project, you first need to add our domain in **Apple Pay - domains** settings in your **Moyasar Dashboard**.

- Please visit their [official docs](https://moyasar.com/docs/dashboard/apple-pay/web-registration/) to read more about how to add the domain for **Apple pay**.

```dart
 unicode-moyasar.web.app
```
