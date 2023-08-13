# GreenBank Front-End Test Job (Designed by Emrecan Üzüm)

This project is a pre-employment test for front-end. Build with Next.js v13 with TypeScript

## Connect Wallet

I used Solana Wallet Adaptor for this project. As you can see below, when user clicks the "Select Wallet", system shows a pop-up that contains detected wallets including phantom, backpack etc..

![connectWallet](https://github.com/emrecanuzum/greenbank/assets/73427323/12ee3733-7f24-4bf9-bc2a-05b9d5cf50c8)

After that, user can see the publicAddress of selected wallet at the area of Selected Wallet. Also user can disconnect the wallet and select another wallet too.

![walletadress](https://github.com/emrecanuzum/greenbank/assets/73427323/8ccb366b-7f01-4df0-869b-30a02762c105)



## Dynamic Data

The data fetching with server side props is like below, I put a placeholder values to About.tsx component that if there is an error with api calls.

![serversideprops](https://github.com/emrecanuzum/greenbank/assets/73427323/d3da39b2-ab1d-4317-a8b1-41c47759e782)

After fetching data, we need to use it in our component function.

![props](https://github.com/emrecanuzum/greenbank/assets/73427323/61384884-f0f6-42ff-b340-41bcc107a8eb)

Finally, this is how API data is rendered for user:

![return](https://github.com/emrecanuzum/greenbank/assets/73427323/ee5bb435-865e-405b-9cc6-1f3e9679c3e1)

## Mock API

This part is much more easier with Google Analytics but the reason why I create Next.js API is the task that I've got.
This backend is not complicated, it has basic req/res and json staffs.

![image](https://github.com/emrecanuzum/greenbank/assets/73427323/032ee375-a602-42e2-bf85-7af7af77e117)

## Next/React features

I've used the most common feature of Next/React in the FAQs section.

![image](https://github.com/emrecanuzum/greenbank/assets/73427323/56aa2cd7-4e03-4d4d-b611-e8acc2ffb582)

as you can see there is a useState call in return. The details are like below:

![usestate](https://github.com/emrecanuzum/greenbank/assets/73427323/edf75a7c-5015-4192-841f-49f976e84b84)

## SEO

![image](https://github.com/emrecanuzum/greenbank/assets/73427323/26368b08-49b9-4aa2-a8e5-c29ec890151d)

As you can see above, I've used meta tags for optimizing SEO well, of course its not fully done with meta tags, html tags are self describing too

## Video

https://github.com/emrecanuzum/greenbank/assets/73427323/3d9da8a9-b4b5-4c46-920f-28a7ef3a6066

## Full View of the Website

![website](https://github.com/emrecanuzum/greenbank/assets/73427323/4af44191-16cf-4b12-9722-bb804c195c74)

