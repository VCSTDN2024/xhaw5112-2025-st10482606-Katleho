package com.example.empoweringthenationapp

import android.content.Intent
import android.net.Uri
import android.os.Bundle
import android.widget.Button
import androidx.appcompat.app.AppCompatActivity

class ContactActivity : AppCompatActivity() {

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_contact_screen)

        // Initialize Back Button after layout is loaded
        val btnBack = findViewById<Button>(R.id.btn_back)

        // 🔙 Back Button - go to previous screen
        btnBack.setOnClickListener {
            finish() // closes current screen and returns to previous
        }

        // 📸 Instagram
        findViewById<Button>(R.id.btnInstagram).setOnClickListener {
            openLink("https://www.instagram.com/empoweringthenation")
        }

        // 🎵 TikTok
        findViewById<Button>(R.id.btnTikTok).setOnClickListener {
            openLink("https://www.tiktok.com/@thee_eat")
        }

        // 🗺️ Map - Opens company address in Google Maps
        findViewById<Button>(R.id.btnMap).setOnClickListener {
            openLink("https://maps.app.goo.gl/raafP3hW3rXBEis99")
        }
        findViewById<Button>( R.id.btnMap).setOnClickListener {
            openLink("https://maps.app.goo.gl/ypbX13VnSCn24SeE8")
        }
        findViewById<Button>(R.id.btnMap).setOnClickListener {
            openLink("https://maps.app.goo.gl/7xnHYQdw7yceD1KAA")
        }

    }

    // Function to open any web link
    private fun openLink(url: String) {
        val intent = Intent(Intent.ACTION_VIEW)
        intent.data = Uri.parse(url)
        startActivity(intent)
    }
}
