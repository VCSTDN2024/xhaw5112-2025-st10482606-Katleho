package com.example.empoweringthenationapp

import android.graphics.*
import android.os.Bundle
import android.os.Environment
import android.widget.Button
import android.widget.EditText
import android.widget.Toast
import androidx.appcompat.app.AppCompatActivity
import java.io.File
import java.io.FileOutputStream
import java.io.IOException
import java.util.*

class RequestQuoteActivity : AppCompatActivity() {

    private lateinit var etName: EditText
    private lateinit var etEmail: EditText
    private lateinit var etPhone: EditText
    private lateinit var etCourse: EditText
    private lateinit var etMessage: EditText
    private lateinit var btnSubmit: Button
    private lateinit var btnDownloadQuote: Button
    private lateinit var btnDownloadInvoice: Button
    private lateinit var btnDownloadEnrollment: Button

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_request_quote_screen)

        etName = findViewById(R.id.etName)
        etEmail = findViewById(R.id.etEmail)
        etPhone = findViewById(R.id.etPhone)
        etCourse = findViewById(R.id.etCourse)
        etMessage = findViewById(R.id.etMessage)
        btnSubmit = findViewById(R.id.btnSubmit)
        btnDownloadQuote = findViewById(R.id.btnDownloadQuote)
        btnDownloadInvoice = findViewById(R.id.btnDownloadInvoice)
        btnDownloadEnrollment = findViewById(R.id.btnDownloadEnrollment)

        // Handle submission
        btnSubmit.setOnClickListener {
            val name = etName.text.toString().trim()
            val email = etEmail.text.toString().trim()
            val phone = etPhone.text.toString().trim()
            val course = etCourse.text.toString().trim()

            if (name.isEmpty() || email.isEmpty() || phone.isEmpty() || course.isEmpty()) {
                Toast.makeText(this, "Please fill in all required fields.", Toast.LENGTH_SHORT).show()
                return@setOnClickListener
            }

            Toast.makeText(this, "Quote request submitted successfully!", Toast.LENGTH_LONG).show()

            etName.text.clear()
            etEmail.text.clear()
            etPhone.text.clear()
            etCourse.text.clear()
            etMessage.text.clear()
        }

        // Handle PDF generation buttons
        btnDownloadQuote.setOnClickListener {
            generatePDF("Quote", "Quote Request", etName.text.toString(), etCourse.text.toString())
        }

        btnDownloadInvoice.setOnClickListener {
            generatePDF("Invoice", "Payment Invoice", etName.text.toString(), etCourse.text.toString())
        }

        btnDownloadEnrollment.setOnClickListener {
            generatePDF("Enrollment", "Enrollment Confirmation", etName.text.toString(), etCourse.text.toString())
        }
    }

    private fun generatePDF(type: String, title: String, name: String, course: String) {
        if (name.isEmpty() || course.isEmpty()) {
            Toast.makeText(this, "Please enter your name and course first.", Toast.LENGTH_SHORT).show()
            return
        }

        val pdfDocument = android.graphics.pdf.PdfDocument()
        val paint = Paint()
        val titlePaint = Paint()
        val pageInfo = android.graphics.pdf.PdfDocument.PageInfo.Builder(595, 842, 1).create()
        val page = pdfDocument.startPage(pageInfo)
        val canvas = page.canvas

        // Header
        titlePaint.textAlign = Paint.Align.CENTER
        titlePaint.textSize = 20f
        titlePaint.typeface = Typeface.create(Typeface.DEFAULT_BOLD, Typeface.BOLD)
        canvas.drawText("Empowering The Nation", 297f, 80f, titlePaint)

        paint.textSize = 14f
        paint.textAlign = Paint.Align.CENTER
        canvas.drawText(title, 297f, 120f, paint)

        // Content
        paint.textAlign = Paint.Align.LEFT
        var y = 180f
        val lineSpacing = 30f
        val info = listOf(
            "Name: $name",
            "Course: $course",
            "Document Type: $type",
            "Date: ${Calendar.getInstance().time}",
            "",
            "Thank you for connecting with Empowering The Nation.",
            "For any queries, contact us at empoweringthenation@example.com"
        )

        info.forEach {
            canvas.drawText(it, 60f, y, paint)
            y += lineSpacing
        }

        pdfDocument.finishPage(page)

        // Save file to Downloads
        val downloadsDir = Environment.getExternalStoragePublicDirectory(Environment.DIRECTORY_DOWNLOADS)
        val file = File(downloadsDir, "${type}_${System.currentTimeMillis()}.pdf")

        try {
            pdfDocument.writeTo(FileOutputStream(file))
            Toast.makeText(this, "$type PDF saved to Downloads.", Toast.LENGTH_LONG).show()
        } catch (e: IOException) {
            e.printStackTrace()
            Toast.makeText(this, "Error saving $type PDF.", Toast.LENGTH_SHORT).show()
        }

        pdfDocument.close()
    }
}
