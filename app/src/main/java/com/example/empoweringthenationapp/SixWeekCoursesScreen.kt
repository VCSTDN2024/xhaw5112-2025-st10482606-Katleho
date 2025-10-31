package com.example.empoweringthenationapp

import android.os.Bundle
import androidx.activity.enableEdgeToEdge
import androidx.appcompat.app.AppCompatActivity
import androidx.core.view.ViewCompat
import androidx.core.view.WindowInsetsCompat
import android.content.Intent
import android.widget.Button

class SixWeekCourses : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_six_week_courses_screen)

        findViewById<Button>(R.id.btn_calculate_fees_week).setOnClickListener {
            // Navigate to payment or calculator
            startActivity(Intent(this, PaymentScreen::class.java))
        }
    }
}