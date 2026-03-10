import { NextResponse } from 'next/server';
import crypto from 'crypto';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { orderReference, orderDate, amount, productName, productPrice } = body;

    const merchantAccount = process.env.WAYFORPAY_ACCOUNT!;
    const merchantSecret = process.env.WAYFORPAY_SECRET!;
    const merchantDomainName = process.env.NEXT_PUBLIC_DOMAIN!;
    const currency = 'UAH';
    const productCount = '1';

    // WayForPay вимагає склеїти ці параметри строго через крапку з комою
    const stringToSign = `${merchantAccount};${merchantDomainName};${orderReference};${orderDate};${amount};${currency};${productName};${productCount};${productPrice}`;

    // Шифруємо це все в HMAC_MD5 (стандарт WayForPay)
    const signature = crypto.createHmac('md5', merchantSecret).update(stringToSign).digest('hex');

    return NextResponse.json({ signature, merchantAccount, merchantDomainName });
  } catch (error) {
    return NextResponse.json({ error: 'Помилка генерації підпису' }, { status: 500 });
  }
}