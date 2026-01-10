package com.example.empoweringthenationapp

import android.content.Intent
import android.os.Bundle
import android.widget.*
import androidx.appcompat.app.AppCompatActivity
import androidx.drawerlayout.widget.DrawerLayout
import com.google.android.material.navigation.NavigationView

class CoursesActivity : AppCompatActivity() {

    private lateinit var drawerLayout: DrawerLayout
    private lateinit var navView: NavigationView

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_courses_screen)

        drawerLayout = findViewById(R.id.drawer_layout)
        navView = findViewById(R.id.nav_view)

        // Course Checkboxes
        val cbFirstAid = findViewById<CheckBox>(R.id.cb_first_aid)
        val cbLandscaping = findViewById<CheckBox>(R.id.cb_landscaping)
        val cbSewing = findViewById<CheckBox>(R.id.cb_sewing)
        val cbLifeSkills = findViewById<CheckBox>(R.id.cb_lifeskills)
        val cbChildMinding = findViewById<CheckBox>(R.id.cb_child_minding)
        val cbCooking = findViewById<CheckBox>(R.id.cb_cooking)
        val cbGardenMaintenance = findViewById<CheckBox>(R.id.cb_gardenmaintenance)

        // Buttons
        val btnCalculateFees = findViewById<Button>(R.id.btn_calculate_fees)
        val btnPlaceOrder = findViewById<Button>(R.id.btn_place_order)

        btnCalculateFees.setOnClickListener {
            var total = 0

            if (cbFirstAid.isChecked) total += 1500
            if (cbLandscaping.isChecked) total += 1500
            if (cbSewing.isChecked) total += 1500
            if (cbLifeSkills.isChecked) total += 1500
            if (cbChildMinding.isChecked) total += 750
            if (cbCooking.isChecked) total += 750
            if (cbGardenMaintenance.isChecked) total += 750

            Toast.makeText(this, "Total Fees: R$total", Toast.LENGTH_LONG).show()
        }

        btnPlaceOrder.setOnClickListener {
            val intent = Intent(this, PaymentScreen::class.java)
            startActivity(intent)
        }

        // Optional: Navigation Drawer Item Clicks
        navView.setNavigationItemSelectedListener { menuItem ->
            when (menuItem.itemId) {
                // Example navigation items
                // R.id.nav_home -> startActivity(Intent(this, MainActivity::class.java))
                // R.id.nav_contact -> startActivity(Intent(this, ContactActivity::class.java))
            }
            drawerLayout.closeDrawers()
            true
        }

    }
}
