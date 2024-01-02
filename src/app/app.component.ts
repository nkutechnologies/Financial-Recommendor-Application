import { Component } from '@angular/core';
import { FinancialService } from './financial.service';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Financial-Recommendor';
  cardPrediction: any;
  investmentPrediction: any;

  ngOnInit() {}

  constructor(private creditService: FinancialService, private fb: FormBuilder) {}

  submitCreditCardPredictionForm() {
    const creditCardData = {
      creditLimit: this.creditCardForm.value.creditLimit,
      creditUtilization: this.creditCardForm.value.creditUtilization,
      creditScore: this.creditCardForm.value.creditScore,
      cardholderAge: this.creditCardForm.value.cardholderAge,
    };

    this.creditService
      .postCreditCardPrediction(creditCardData)
      .subscribe((response) => {
        console.log('Credit Card Prediction:', response);
        this.cardPrediction = response.prediction;
        this.creditCardForm.reset();
      });
  }

  submitInvestmentPredictionForm() {

    const investmentData = {
      investmentReturn: this.investmentForm.value.investmentReturn,
      riskTolerance: this.investmentForm.value.riskTolerance,
      investorAge: this.investmentForm.value.investorAge,
      investorIncome: this.investmentForm.value.investorIncome,
    };

    this.creditService.postInvestmentPrediction(investmentData).subscribe(
      (response) => {
        console.log('Investment Prediction:', response);
        this.investmentPrediction = response.prediction;
        this.investmentForm.reset();
      }
    );
  }

  creditCardForm = new FormGroup({
    creditLimit: new FormControl(''),
    creditUtilization: new FormControl(''),
    creditScore: new FormControl(''),
    cardholderAge: new FormControl(''),
  });

  investmentForm = new FormGroup({
    investmentReturn: new FormControl(''),
    riskTolerance: new FormControl(''),
    investorAge: new FormControl(''),
    investorIncome: new FormControl(''),
  });
}
