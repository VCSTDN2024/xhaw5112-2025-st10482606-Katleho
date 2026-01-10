package com.example.empoweringthenationapp

import android.content.Intent
import android.os.Bundle
import android.widget.Button
import android.widget.Toast
import com.google.android.material.textfield.TextInputEditText
import androidx.appcompat.app.AppCompatActivity

class PaymentScreen : AppCompatActivity() {

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_payment_screen)

        val etCardholder = findViewById<TextInputEditText>(R.id.et_cardholder)
        val etCardNumber = findViewById<TextInputEditText>(R.id.et_card_number)
        val etExpiry = findViewById<TextInputEditText>(R.id.et_expiry)
        val etCvv = findViewById<TextInputEditText>(R.id.et_cvv)
        val btnPlaceOrder = findViewById<Button>(R.id.btn_place_order)
        val btnBack = findViewById<Button>(R.id.btn_back)

        btnPlaceOrder.setOnClickListener {
            val cardholder = etCardholder.text.toString().trim()
            val cardNumber = etCardNumber.text.toString().trim()
            val expiry = etExpiry.text.toString().trim()
            val cvv = etCvv.text.toString().trim()

            // Validate required fields
            if (cardholder.isEmpty() || cardNumber.isEmpty() || expiry.isEmpty() || cvv.isEmpty()) {
                Toast.makeText(this, "Please complete all fields before proceeding.", Toast.LENGTH_SHORT).show()
                return@setOnClickListener
            }

            // Validate card number (basic check for 16 digits)
            if (cardNumber.length != 16 || !cardNumber.all { it.isDigit() }) {
                Toast.makeText(this, "Please enter a valid 16-digit card number.", Toast.LENGTH_SHORT).show()
                return@setOnClickListener
            }

            // Validate expiry format (MM/YY or MM/YYYY)
            val expiryRegex = Regex("^(0[1-9]|1[0-2])/([0-9]{2}|[0-9]{4})$")
            if (!expiryRegex.matches(expiry)) {
                Toast.makeText(this, "Please enter a valid expiry date (MM/YY).", Toast.LENGTH_SHORT).show()
                return@setOnClickListener
            }

            // Validate CVV (3 or 4 digits)
            if (cvv.length !in 3..4 || !cvv.all { it.isDigit() }) {
                Toast.makeText(this, "Please enter a valid CVV.", Toast.LENGTH_SHORT).show()
                return@setOnClickListener
            }

            // If all validations pass
            Toast.makeText(this, "Payment successful! Processing order...", Toast.LENGTH_SHORT).show()
            startActivity(Intent(this, ConfirmationScreen::class.java))
            finish()
        }

        btnBack.setOnClickListener {
            finish() // Go back to previous screen
        }
    }
}
