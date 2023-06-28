# TDEE Calculator

On this project, the aim was to get a feel of the Bootstrap framework and to complete my first challenge with Javascript. 
Despite now feeling simple, it was challenging to figure out how to make Javascript carry out the calculation the way I needed to and then push the result on the DOM at the click of a button. 

<!-- # Hosted

https://andreranussi.github.io/TDEE-Calculator/ -->

# Project specifications

- JavaScript
- Bootstrap

# Optional To Do
- Improve on the design using Bootstrap.
- Improve the accuracy of the calculation by adding the option for the user to porvide their bodyfat percentage.


# Usage
Katch-McArdle formula was used to calculate the Basic Metabolic Rate (BMR), and then the BMR value was multiplied by an activity multiplier factor.

Formula: 
- Lean Body Mass (LBM) Male = 0.407 × weight [kg] + 0.267 × height [cm]  19.2
- Lean Body Mass (LBM) Female = 0.252 × weight [kg] + 0.473 × height [cm] - 48.3
- BMR = 370 + (21.6 × Lean Body Mass [kg])

Activity Level Multiplier:
- Little/no exercise (sedentary lifestyle) (1.2)
- Light exercise 1-2 times/week (1.375)
- Moderate exercise 2-3 times/week (1.55)
- Hard exercise 4-5 times/week (1.725)
- Physical job or hard exercise 6-7 times/week (1.9)
- Professional athlete (2.9)

TDEE = BMR × Activity Level Multiplier

