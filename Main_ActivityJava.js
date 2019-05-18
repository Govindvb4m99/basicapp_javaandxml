package com.example.pleaserun;

import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;
import android.widget.TextView;

public class MainActivity extends AppCompatActivity {
    // define the global variable

    // variable number1, number2 for input input number
    // Add_button, result textView
    EditText number;
    Button cos_button;
    Button sin_button;
    Button exp_button;
    Button tan_button;
    TextView result;
    double ans=0;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        // by ID we can use each component which id is assign in xml file
        number=(EditText) findViewById(R.id.editText_first_no);
        cos_button=(Button) findViewById(R.id.cos_button);
        sin_button=(Button) findViewById(R.id.sin_button);
        exp_button=(Button) findViewById(R.id.exp_button);
        tan_button=(Button) findViewById(R.id.tan_button);
        result = (TextView) findViewById(R.id.textView_answer);
        cos_button.setOnClickListener(new View.OnClickListener() {

            public void onClick(View v) {

                // num1 double type
                // get data which is in edittext, convert it to string
                // using parse Double convert it to Double type
                double num1 = Double.parseDouble(number.getText().toString());

                // add both number and store it to sum
                double cos = java.lang.Math.cos(num1) ;
                // set it ot result textview
                result.setText(Double.toString(cos));
            }
        });
        sin_button.setOnClickListener(new View.OnClickListener() {

            public void onClick(View v) {

                // num1 double type
                // get data which is in edittext, convert it to string
                // using parse Double convert it to Double type
                double num1 = Double.parseDouble(number.getText().toString());

                // add both number and store it to sum
                double sin = java.lang.Math.sin(num1) ;
                // set it ot result textview
                result.setText(Double.toString(sin));
            }
        });
        sin_button.setOnClickListener(new View.OnClickListener() {

            public void onClick(View v) {

                // num1 double type
                // get data which is in edittext, convert it to string
                // using parse Double convert it to Double type
                double num1 = Double.parseDouble(number.getText().toString());

                // add both number and store it to sum
                double sin = java.lang.Math.sin(num1) ;
                // set it ot result textview
                result.setText(Double.toString(sin));
            }
        });
        exp_button.setOnClickListener(new View.OnClickListener() {

            public void onClick(View v) {

                // num1 double type
                // get data which is in edittext, convert it to string
                // using parse Double convert it to Double type
                double num1 = Double.parseDouble(number.getText().toString());

                // add both number and store it to sum
                double exp = java.lang.Math.exp(num1) ;
                // set it ot result textview
                result.setText(Double.toString(exp));
            }
        });
        tan_button.setOnClickListener(new View.OnClickListener() {

            public void onClick(View v) {

                // num1 double type
                // get data which is in edittext, convert it to string
                // using parse Double convert it to Double type
                double num1 = Double.parseDouble(number.getText().toString());

                // add both number and store it to sum
                double tan = java.lang.Math.tan(num1) ;
                // set it ot result textview
                result.setText(Double.toString(tan));
            }
        });
    }

}

