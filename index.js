<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>WhatsApp Numbers Store</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <header>
        <h1>WhatsApp Numbers Store</h1>
    </header>

    <section class="pricing">
        <h2>Available Numbers</h2>
        <table>
            <tr>
                <th>Country</th>
                <th>Number</th>
                <th>Price (USD)</th>
                <th>Buy</th>
            </tr>
            <tr>
                <td>USA</td>
                <td>+1 234 567 890</td>
                <td>$5</td>
                <td><button onclick="buyNow('USA', '+1 234 567 890', 5)">Buy Now</button></td>
            </tr>
            <tr>
                <td>UK</td>
                <td>+44 123 456 789</td>
                <td>$7</td>
                <td><button onclick="buyNow('UK', '+44 123 456 789', 7)">Buy Now</button></td>
            </tr>
        </table>
    </section>

    <section class="payment">
        <h2>Payment Methods</h2>
        <ul>
            <li>JazzCash</li>
            <li>Easypaisa</li>
            <li>Binance</li>
        </ul>
    </section>

    <section class="contact">
        <h2>Contact Us</h2>
        <a href="https://wa.me/923471728690" class="whatsapp">WhatsApp</a>
        <a href="https://t.me/yourtelegram" class="telegram">Telegram</a>
    </section>

    <script src="script.js"></script>
</body>
</html>
