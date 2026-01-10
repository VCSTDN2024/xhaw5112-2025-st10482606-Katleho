package com.example.empoweringthenationapp

import android.content.Intent
import android.os.Bundle
import android.widget.Button
import androidx.appcompat.app.AppCompatActivity

class MainActivity : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main_screen)

        val btnCourses = findViewById<Button>(R.id.btn_course)
        val btnQuote = findViewById<Button>(R.id.btn_request_quote)
        val btnContact = findViewById<Button>(R.id.btn_contact)

        btnCourses.setOnClickListener {
            startActivity(Intent(this, CoursesActivity::class.java))
        }
        btnQuote.setOnClickListener {
            startActivity(Intent(this, RequestQuoteActivity::class.java))
        }
        btnContact.setOnClickListener {
            startActivity(Intent(this, ContactActivity::class.java))
        }
    }
}