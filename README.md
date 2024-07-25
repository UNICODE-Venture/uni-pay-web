# Payment Gateway Library Crafted by the **[UNICODE Team](https://www.unicodesolutions.co/).**

A lightweight library for processing online payments and generating invoices with Moyasar, providing seamless payment info retrieval as well (🇸🇦💙🇧🇩❤️🇪🇬).

## **Features support**

<img src="https://raw.githubusercontent.com/UNICODE-Venture/unicode-moyasar/main/assets/images/cards.png" height=50 alt="UniPay Payment" />

- **Apple Pay**
- **Card support (_Mada_, _Visa_, _AMEX_ and _Mastercard_)**
- **stc pay**

<img src="https://raw.githubusercontent.com/UNICODE-Venture/unicode-moyasar/main/assets/screenshots/sc.png" width=200, height=300 alt="UniPay" />

#### Getting started and make your payment using the gateway.

```typescript
UniPay.makePayment({
  config: new UniPayConfig({
    sKey: "sk_test_key",
    environment: UniPayEnv.staging,
    locale: UniPayLocale.ar,
  }),
  paymentData: new UniPayInvoiceDTO({
    amount: 150.99 * 100, // (150.99 * 100) because 1 sr == 100 Halala's.
    currency: UniPayCurrency.sar,
    description: "Test payment",
    expiredAt: "expiredAt - optional",
    successUrl: "https://your-website.com/success",
    backUrl: "https://your-website.com/back",
    metadata: {
      product_name: "your-product-name",
      product_id: "abc123",
    },
  }),
});
```

#### Get payment transaction details from Moyasar using the paymentId or transactionId

```typescript
UniPay.getPaymentTransactionById({
  config: new UniPayConfig({ sKey: "sk_test_key" }),
  transactionId: "abc12345",
});
```

#### Verify transaction from the callback url using the query-params, by your own if needed.

```typescript
UniPay.verifyPaymentByQueryParams({
  config: new UniPayConfig({
    sKey: "sk_test_key",
    urlSearchParams:
      "Optional: you can provide your own query-params, otherwise it will use the current url as default.",
  }),
});
```

#### If you enjoyed it, then give it a star ⭐️ and like 👍🏻 and for more arts & crafts 🎨 from our team kindly visit here [Team UNICODE](https://pub.dev/publishers/unicodesolutions.co/packages). Until next time, keep coding and stay awesome 😉
