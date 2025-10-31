package com.example.empoweringthenationapp

import android.os.Bundle
import androidx.activity.enableEdgeToEdge
import androidx.appcompat.app.AppCompatActivity
import androidx.core.view.ViewCompat
import androidx.core.view.WindowInsetsCompat
import android.content.Intent
import android.widget.Button

class SixMonth : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_six_month_courses_screen)

        findViewById<Button>(R.id.btn_pay_now).setOnClickListener {
            startActivity(Intent(this, PaymentScreen::class.java))
        }
    }
}