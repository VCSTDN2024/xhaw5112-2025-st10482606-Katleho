package com.example.empoweringthenationapp

import android.content.Intent
import android.os.Bundle
import android.widget.Button
import androidx.appcompat.app.AppCompatActivity

class SplashActivity : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_splash_screen) // matches your XML filename

        // Find button from XML
        val btnStart = findViewById<Button>(R.id.btn_start)

        // When user clicks button, go to SignUpScreen
        btnStart.setOnClickListener {
            val intent = Intent(this, SignUpScreen::class.java)
            startActivity(intent)
            finish() // Close splash so user can't go back here
        }
    }
}