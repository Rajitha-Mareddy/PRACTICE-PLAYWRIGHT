# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: DragandDrop.spec.ts >> mouse actions practice
- Location: tests\DragandDrop.spec.ts:3:5

# Error details

```
Error: expect(locator).toHaveText(expected) failed

Locator:  locator('#droppable').first().locator('p')
Expected: "Dropped!"
Received: "Drop Here"
Timeout:  5000ms

Call log:
  - Expect "toHaveText" with timeout 5000ms
  - waiting for locator('#droppable').first().locator('p')
    8 × locator resolved to <p>Drop Here</p>
      - unexpected value "Drop Here"

```

# Page snapshot

```yaml
- generic [ref=e2]:
  - banner [ref=e3]:
    - link [ref=e4] [cursor=pointer]:
      - /url: https://demoqa.com
      - img [ref=e5]
  - generic [ref=e8]:
    - generic [ref=e11]:
      - generic [ref=e14] [cursor=pointer]:
        - generic [ref=e15]:
          - img [ref=e17]
          - text: Elements
        - img [ref=e22]
      - generic [ref=e26] [cursor=pointer]:
        - generic [ref=e27]:
          - img [ref=e29]
          - text: Forms
        - img [ref=e35]
      - generic [ref=e39] [cursor=pointer]:
        - generic [ref=e40]:
          - img [ref=e42]
          - text: Alerts, Frame & Windows
        - img [ref=e47]
      - generic [ref=e51] [cursor=pointer]:
        - generic [ref=e52]:
          - img [ref=e54]
          - text: Widgets
        - img [ref=e60]
      - generic [ref=e62]:
        - generic [ref=e64] [cursor=pointer]:
          - generic [ref=e65]:
            - img [ref=e67]
            - text: Interactions
          - img [ref=e72]
        - list [ref=e75]:
          - listitem [ref=e76] [cursor=pointer]:
            - link "Sortable" [ref=e77]:
              - /url: /sortable
              - img [ref=e78]
              - text: Sortable
          - listitem [ref=e80] [cursor=pointer]:
            - link "Selectable" [ref=e81]:
              - /url: /selectable
              - img [ref=e82]
              - text: Selectable
          - listitem [ref=e84] [cursor=pointer]:
            - link "Resizable" [ref=e85]:
              - /url: /resizable
              - img [ref=e86]
              - text: Resizable
          - listitem [ref=e88] [cursor=pointer]:
            - link "Droppable" [ref=e89]:
              - /url: /droppable
              - img [ref=e90]
              - text: Droppable
          - listitem [ref=e92] [cursor=pointer]:
            - link "Dragabble" [ref=e93]:
              - /url: /dragabble
              - img [ref=e94]
              - text: Dragabble
      - generic [ref=e98] [cursor=pointer]:
        - generic [ref=e99]:
          - img [ref=e101]
          - text: Book Store Application
        - img [ref=e106]
    - generic [ref=e108]:
      - generic [ref=e109]:
        - heading "Droppable" [level=1] [ref=e110]
        - tablist [ref=e111]:
          - tab "Simple" [selected] [ref=e112] [cursor=pointer]
          - tab "Accept" [ref=e113] [cursor=pointer]
          - tab "Prevent Propogation" [ref=e114] [cursor=pointer]
          - tab "Revert Draggable" [ref=e115] [cursor=pointer]
        - tabpanel "Simple" [ref=e117]:
          - generic [ref=e118]:
            - generic [ref=e119]: Drag Me
            - paragraph [ref=e121]: Drop Here
      - iframe [ref=e125]:
        - generic [active] [ref=f5e1]:
          - generic [ref=f5e5]:
            - generic [ref=f5e6]:
              - generic "Siemens" [ref=f5e7]:
                - link "Unlock innovation leaps" [ref=f5e8] [cursor=pointer]:
                  - /url: https://googleads.g.doubleclick.net/aclk?sa=l&ai=CYikul7X9aZOhCabkk7QPh_G0gQ-Rj8zAhgGvzc-w2BWz9tq9jkgQASDG-9Z5YOWCgICYDqAB8_m4iQPIAQGpAjKCvSdzsLM-4AIAqAMByAMKqgSEAk_QQnQ_bqrPh9VsDZNeDsA_r3Vjv6kc8LFJ8e-ZvCcCSAnm7je8T7mcFiGzDdWImubKmrHeWtbumwp2PH_BzlwB8c8PeWPG1uhJdBRnOTZ6B_ZsRzgP7XJeYvpgkjk4C114j8K0jY-XN8OOF9IDJjdTT2eVPxlywgjO6nEjOlX3tRv8GPkbRNvQBLpEcSQOuGHE4l9IfmVwRPBeK4XjFCv33_NW3zdE9qmzivMEJxW8LOh81E9dDopo9wMpog_ho2apCQ62O0FjKn16sTapzh5frQi_lP5KXdgZXV1zcldRG-UpKBm7VvHKjo7i2XUJwJyb6UHOo6OT0MawmBqkfvdU5W4_wATt6qrE1wXgBAGIBcSfp8BYgAf9ssUuqAenzLECqAfi2LECqAemvhuoB8zOsQKoB_PRG6gHltgbqAeqm7ECqAeOzhuoB5PYG6gH8OAbqAfulrECqAf-nrECqAevvrECqAfVyRuoB9m2sQKoB5oGqAf_nrECqAffn7ECqAf4wrECqAf7wrEC2AcB0ggwCIBhEAEYHTIIioKAgICAgAg6D4BAgMCAgICAqIACqIOAEEi9_cE6WKyp5eC4qZQD8ggbYWR4LXN1YnN5bi0zNTIwNjE3MzQxNjY1NTkysQlUnqxBWLM8nYAKA4oK6wFodHRwczovL3BpeGVsLmV2ZXJlc3R0ZWNoLm5ldC80NjIvY3E_ZXZfc2lkPTMmZXZfbG49JmV2X2x4PSZldl9jcng9ODA1MzEzODU0MjQ3JmV2X210PSZldl9uPWQmZXZfbHR4PSZldl9wbD1kZW1vcWEuY29tJmV2X3Bvcz0mZXZfZHZjPWMmZXZfZHZtPSZldl9waHk9OTE0NzQyMSZldl9sb2M9JmV2X2N4PTIzNzU3MTgwODY4JmV2X2F4PTE5NTI5NTg4NDY1MyZldl9lZmlkPXtnY2xpZH06RzpzJnVybD17bHB1cmx9mAsByAsB4AsBogwPKgoKCI7fsQKV4rECkAEBqg0CSU7IDQHiDRMI-tfl4LiplAMVJvKEAB2HOC3w6g0TCNik5uC4qZQDFSbyhAAdhzgt8PANAogO____________AdgTA4gUAdAVAZgWAcoWAgoA-BYBgBcBshcQGAEqCjYxNjg1NzY1MDVQBroXAjgBqhgXCQAAAABwIBdBEgo2MTY4NTc2NTA1GAGyGAkSAsNRGAEiAQDQGAHoGAHCGQIIAQ&ae=1&gclid=EAIaIQobChMI08jm4LiplAMVJvKEAB2HOC3wEAEYASAAEgK3B_D_BwE&num=1&cid=CAQS5AEABaugfYal-UZ_e3dM-YMX2rXXl36cwZ5XtJstgCYji6yKZMoNZ3ksVbvT5KTJDq_-qpBG6jGOW_dGPRHJg8XKirXtT_53YOoW0lUKKoLez-V3go9IX9HZGKbPog22gNJgGVL6SI5sxB3yyqKz1s59JMrnAMsRNmKWRsFCz6ewVzem6ra6dCg6WImOAeMsOc_wht1yNrMs0t5fhEICDUKfWTx01zYvapiiKRhsL_tcJsgKTHKzc7cqwhKkvUA91QrETEfQg_nK95iyPC37U2TYyYlTBBvGKlWbXsXY-k4YgVIq5AgYAQ&sig=AOD64_1XXY8SwZUZ76fO-jSWZK2K_osUkw&client=ca-pub-4573231550355221&rf=4&nb=0&adurl=https://www.siemens.com/en-us/company/insights/pringles-digital-transformation/%3Fstc%3Dwwdi136266%26ef_id%3DEAIaIQobChMI08jm4LiplAMVJvKEAB2HOC3wEAEYASAAEgK3B_D_BwE:G:s%26s_kwcid%3DAL!462!3!805313854247!!demoqa.com!d!!!23757180868!195295884653%26acz%3D1%26gad_source%3D5%26gad_campaignid%3D23757180868%26gclid%3DEAIaIQobChMI08jm4LiplAMVJvKEAB2HOC3wEAEYASAAEgK3B_D_BwE
              - link "The Siemens Digital Twin turns dough making into predictable science." [ref=f5e10] [cursor=pointer]:
                - /url: https://googleads.g.doubleclick.net/aclk?sa=l&ai=CYikul7X9aZOhCabkk7QPh_G0gQ-Rj8zAhgGvzc-w2BWz9tq9jkgQASDG-9Z5YOWCgICYDqAB8_m4iQPIAQGpAjKCvSdzsLM-4AIAqAMByAMKqgSEAk_QQnQ_bqrPh9VsDZNeDsA_r3Vjv6kc8LFJ8e-ZvCcCSAnm7je8T7mcFiGzDdWImubKmrHeWtbumwp2PH_BzlwB8c8PeWPG1uhJdBRnOTZ6B_ZsRzgP7XJeYvpgkjk4C114j8K0jY-XN8OOF9IDJjdTT2eVPxlywgjO6nEjOlX3tRv8GPkbRNvQBLpEcSQOuGHE4l9IfmVwRPBeK4XjFCv33_NW3zdE9qmzivMEJxW8LOh81E9dDopo9wMpog_ho2apCQ62O0FjKn16sTapzh5frQi_lP5KXdgZXV1zcldRG-UpKBm7VvHKjo7i2XUJwJyb6UHOo6OT0MawmBqkfvdU5W4_wATt6qrE1wXgBAGIBcSfp8BYgAf9ssUuqAenzLECqAfi2LECqAemvhuoB8zOsQKoB_PRG6gHltgbqAeqm7ECqAeOzhuoB5PYG6gH8OAbqAfulrECqAf-nrECqAevvrECqAfVyRuoB9m2sQKoB5oGqAf_nrECqAffn7ECqAf4wrECqAf7wrEC2AcB0ggwCIBhEAEYHTIIioKAgICAgAg6D4BAgMCAgICAqIACqIOAEEi9_cE6WKyp5eC4qZQD8ggbYWR4LXN1YnN5bi0zNTIwNjE3MzQxNjY1NTkysQlUnqxBWLM8nYAKA4oK6wFodHRwczovL3BpeGVsLmV2ZXJlc3R0ZWNoLm5ldC80NjIvY3E_ZXZfc2lkPTMmZXZfbG49JmV2X2x4PSZldl9jcng9ODA1MzEzODU0MjQ3JmV2X210PSZldl9uPWQmZXZfbHR4PSZldl9wbD1kZW1vcWEuY29tJmV2X3Bvcz0mZXZfZHZjPWMmZXZfZHZtPSZldl9waHk9OTE0NzQyMSZldl9sb2M9JmV2X2N4PTIzNzU3MTgwODY4JmV2X2F4PTE5NTI5NTg4NDY1MyZldl9lZmlkPXtnY2xpZH06RzpzJnVybD17bHB1cmx9mAsByAsB4AsBogwPKgoKCI7fsQKV4rECkAEBqg0CSU7IDQHiDRMI-tfl4LiplAMVJvKEAB2HOC3w6g0TCNik5uC4qZQDFSbyhAAdhzgt8PANAogO____________AdgTA4gUAdAVAZgWAcoWAgoA-BYBgBcBshcQGAEqCjYxNjg1NzY1MDVQBroXAjgBqhgXCQAAAABwIBdBEgo2MTY4NTc2NTA1GAGyGAkSAsNRGAEiAQDQGAHoGAHCGQIIAQ&ae=1&gclid=EAIaIQobChMI08jm4LiplAMVJvKEAB2HOC3wEAEYASAAEgK3B_D_BwE&num=1&cid=CAQS5AEABaugfYal-UZ_e3dM-YMX2rXXl36cwZ5XtJstgCYji6yKZMoNZ3ksVbvT5KTJDq_-qpBG6jGOW_dGPRHJg8XKirXtT_53YOoW0lUKKoLez-V3go9IX9HZGKbPog22gNJgGVL6SI5sxB3yyqKz1s59JMrnAMsRNmKWRsFCz6ewVzem6ra6dCg6WImOAeMsOc_wht1yNrMs0t5fhEICDUKfWTx01zYvapiiKRhsL_tcJsgKTHKzc7cqwhKkvUA91QrETEfQg_nK95iyPC37U2TYyYlTBBvGKlWbXsXY-k4YgVIq5AgYAQ&sig=AOD64_1XXY8SwZUZ76fO-jSWZK2K_osUkw&client=ca-pub-4573231550355221&rf=4&nb=7&adurl=https://www.siemens.com/en-us/company/insights/pringles-digital-transformation/%3Fstc%3Dwwdi136266%26ef_id%3DEAIaIQobChMI08jm4LiplAMVJvKEAB2HOC3wEAEYASAAEgK3B_D_BwE:G:s%26s_kwcid%3DAL!462!3!805313854247!!demoqa.com!d!!!23757180868!195295884653%26acz%3D1%26gad_source%3D5%26gad_campaignid%3D23757180868%26gclid%3DEAIaIQobChMI08jm4LiplAMVJvKEAB2HOC3wEAEYASAAEgK3B_D_BwE
            - generic [ref=f5e13]:
              - generic "Siemens" [ref=f5e15]:
                - link "Siemens" [ref=f5e16] [cursor=pointer]:
                  - /url: https://googleads.g.doubleclick.net/aclk?sa=l&ai=CYikul7X9aZOhCabkk7QPh_G0gQ-Rj8zAhgGvzc-w2BWz9tq9jkgQASDG-9Z5YOWCgICYDqAB8_m4iQPIAQGpAjKCvSdzsLM-4AIAqAMByAMKqgSEAk_QQnQ_bqrPh9VsDZNeDsA_r3Vjv6kc8LFJ8e-ZvCcCSAnm7je8T7mcFiGzDdWImubKmrHeWtbumwp2PH_BzlwB8c8PeWPG1uhJdBRnOTZ6B_ZsRzgP7XJeYvpgkjk4C114j8K0jY-XN8OOF9IDJjdTT2eVPxlywgjO6nEjOlX3tRv8GPkbRNvQBLpEcSQOuGHE4l9IfmVwRPBeK4XjFCv33_NW3zdE9qmzivMEJxW8LOh81E9dDopo9wMpog_ho2apCQ62O0FjKn16sTapzh5frQi_lP5KXdgZXV1zcldRG-UpKBm7VvHKjo7i2XUJwJyb6UHOo6OT0MawmBqkfvdU5W4_wATt6qrE1wXgBAGIBcSfp8BYgAf9ssUuqAenzLECqAfi2LECqAemvhuoB8zOsQKoB_PRG6gHltgbqAeqm7ECqAeOzhuoB5PYG6gH8OAbqAfulrECqAf-nrECqAevvrECqAfVyRuoB9m2sQKoB5oGqAf_nrECqAffn7ECqAf4wrECqAf7wrEC2AcB0ggwCIBhEAEYHTIIioKAgICAgAg6D4BAgMCAgICAqIACqIOAEEi9_cE6WKyp5eC4qZQD8ggbYWR4LXN1YnN5bi0zNTIwNjE3MzQxNjY1NTkysQlUnqxBWLM8nYAKA4oK6wFodHRwczovL3BpeGVsLmV2ZXJlc3R0ZWNoLm5ldC80NjIvY3E_ZXZfc2lkPTMmZXZfbG49JmV2X2x4PSZldl9jcng9ODA1MzEzODU0MjQ3JmV2X210PSZldl9uPWQmZXZfbHR4PSZldl9wbD1kZW1vcWEuY29tJmV2X3Bvcz0mZXZfZHZjPWMmZXZfZHZtPSZldl9waHk9OTE0NzQyMSZldl9sb2M9JmV2X2N4PTIzNzU3MTgwODY4JmV2X2F4PTE5NTI5NTg4NDY1MyZldl9lZmlkPXtnY2xpZH06RzpzJnVybD17bHB1cmx9mAsByAsB4AsBogwPKgoKCI7fsQKV4rECkAEBqg0CSU7IDQHiDRMI-tfl4LiplAMVJvKEAB2HOC3w6g0TCNik5uC4qZQDFSbyhAAdhzgt8PANAogO____________AdgTA4gUAdAVAZgWAcoWAgoA-BYBgBcBshcQGAEqCjYxNjg1NzY1MDVQBroXAjgBqhgXCQAAAABwIBdBEgo2MTY4NTc2NTA1GAGyGAkSAsNRGAEiAQDQGAHoGAHCGQIIAQ&ae=1&gclid=EAIaIQobChMI08jm4LiplAMVJvKEAB2HOC3wEAEYASAAEgK3B_D_BwE&num=1&cid=CAQS5AEABaugfYal-UZ_e3dM-YMX2rXXl36cwZ5XtJstgCYji6yKZMoNZ3ksVbvT5KTJDq_-qpBG6jGOW_dGPRHJg8XKirXtT_53YOoW0lUKKoLez-V3go9IX9HZGKbPog22gNJgGVL6SI5sxB3yyqKz1s59JMrnAMsRNmKWRsFCz6ewVzem6ra6dCg6WImOAeMsOc_wht1yNrMs0t5fhEICDUKfWTx01zYvapiiKRhsL_tcJsgKTHKzc7cqwhKkvUA91QrETEfQg_nK95iyPC37U2TYyYlTBBvGKlWbXsXY-k4YgVIq5AgYAQ&sig=AOD64_1XXY8SwZUZ76fO-jSWZK2K_osUkw&client=ca-pub-4573231550355221&rf=4&nb=1&adurl=https://www.siemens.com/en-us/company/insights/pringles-digital-transformation/%3Fstc%3Dwwdi136266%26ef_id%3DEAIaIQobChMI08jm4LiplAMVJvKEAB2HOC3wEAEYASAAEgK3B_D_BwE:G:s%26s_kwcid%3DAL!462!3!805313854247!!demoqa.com!d!!!23757180868!195295884653%26acz%3D1%26gad_source%3D5%26gad_campaignid%3D23757180868%26gclid%3DEAIaIQobChMI08jm4LiplAMVJvKEAB2HOC3wEAEYASAAEgK3B_D_BwE
              - link "Learn More" [ref=f5e21] [cursor=pointer]:
                - /url: https://googleads.g.doubleclick.net/aclk?sa=l&ai=CYikul7X9aZOhCabkk7QPh_G0gQ-Rj8zAhgGvzc-w2BWz9tq9jkgQASDG-9Z5YOWCgICYDqAB8_m4iQPIAQGpAjKCvSdzsLM-4AIAqAMByAMKqgSEAk_QQnQ_bqrPh9VsDZNeDsA_r3Vjv6kc8LFJ8e-ZvCcCSAnm7je8T7mcFiGzDdWImubKmrHeWtbumwp2PH_BzlwB8c8PeWPG1uhJdBRnOTZ6B_ZsRzgP7XJeYvpgkjk4C114j8K0jY-XN8OOF9IDJjdTT2eVPxlywgjO6nEjOlX3tRv8GPkbRNvQBLpEcSQOuGHE4l9IfmVwRPBeK4XjFCv33_NW3zdE9qmzivMEJxW8LOh81E9dDopo9wMpog_ho2apCQ62O0FjKn16sTapzh5frQi_lP5KXdgZXV1zcldRG-UpKBm7VvHKjo7i2XUJwJyb6UHOo6OT0MawmBqkfvdU5W4_wATt6qrE1wXgBAGIBcSfp8BYgAf9ssUuqAenzLECqAfi2LECqAemvhuoB8zOsQKoB_PRG6gHltgbqAeqm7ECqAeOzhuoB5PYG6gH8OAbqAfulrECqAf-nrECqAevvrECqAfVyRuoB9m2sQKoB5oGqAf_nrECqAffn7ECqAf4wrECqAf7wrEC2AcB0ggwCIBhEAEYHTIIioKAgICAgAg6D4BAgMCAgICAqIACqIOAEEi9_cE6WKyp5eC4qZQD8ggbYWR4LXN1YnN5bi0zNTIwNjE3MzQxNjY1NTkysQlUnqxBWLM8nYAKA4oK6wFodHRwczovL3BpeGVsLmV2ZXJlc3R0ZWNoLm5ldC80NjIvY3E_ZXZfc2lkPTMmZXZfbG49JmV2X2x4PSZldl9jcng9ODA1MzEzODU0MjQ3JmV2X210PSZldl9uPWQmZXZfbHR4PSZldl9wbD1kZW1vcWEuY29tJmV2X3Bvcz0mZXZfZHZjPWMmZXZfZHZtPSZldl9waHk9OTE0NzQyMSZldl9sb2M9JmV2X2N4PTIzNzU3MTgwODY4JmV2X2F4PTE5NTI5NTg4NDY1MyZldl9lZmlkPXtnY2xpZH06RzpzJnVybD17bHB1cmx9mAsByAsB4AsBogwPKgoKCI7fsQKV4rECkAEBqg0CSU7IDQHiDRMI-tfl4LiplAMVJvKEAB2HOC3w6g0TCNik5uC4qZQDFSbyhAAdhzgt8PANAogO____________AdgTA4gUAdAVAZgWAcoWAgoA-BYBgBcBshcQGAEqCjYxNjg1NzY1MDVQBroXAjgBqhgXCQAAAABwIBdBEgo2MTY4NTc2NTA1GAGyGAkSAsNRGAEiAQDQGAHoGAHCGQIIAQ&ae=1&gclid=EAIaIQobChMI08jm4LiplAMVJvKEAB2HOC3wEAEYASAAEgK3B_D_BwE&num=1&cid=CAQS5AEABaugfYal-UZ_e3dM-YMX2rXXl36cwZ5XtJstgCYji6yKZMoNZ3ksVbvT5KTJDq_-qpBG6jGOW_dGPRHJg8XKirXtT_53YOoW0lUKKoLez-V3go9IX9HZGKbPog22gNJgGVL6SI5sxB3yyqKz1s59JMrnAMsRNmKWRsFCz6ewVzem6ra6dCg6WImOAeMsOc_wht1yNrMs0t5fhEICDUKfWTx01zYvapiiKRhsL_tcJsgKTHKzc7cqwhKkvUA91QrETEfQg_nK95iyPC37U2TYyYlTBBvGKlWbXsXY-k4YgVIq5AgYAQ&sig=AOD64_1XXY8SwZUZ76fO-jSWZK2K_osUkw&client=ca-pub-4573231550355221&rf=4&nb=8&adurl=https://www.siemens.com/en-us/company/insights/pringles-digital-transformation/%3Fstc%3Dwwdi136266%26ef_id%3DEAIaIQobChMI08jm4LiplAMVJvKEAB2HOC3wEAEYASAAEgK3B_D_BwE:G:s%26s_kwcid%3DAL!462!3!805313854247!!demoqa.com!d!!!23757180868!195295884653%26acz%3D1%26gad_source%3D5%26gad_campaignid%3D23757180868%26gclid%3DEAIaIQobChMI08jm4LiplAMVJvKEAB2HOC3wEAEYASAAEgK3B_D_BwE
                - generic [ref=f5e22]: Learn More
                - img [ref=f5e23]
          - generic [ref=f5e25]:
            - link [ref=f5e27] [cursor=pointer]:
              - /url: https://adssettings.google.com/whythisad?source=display&reasons=AZwrskWJp5mREj9nG7WHk-pjUP4T9kfNJewOasMMY-lpZXlJ9OWPjw-YiuYMcMd8T-14TOngfdx0VJrE0pNiLeQlpQGVOQ0WOzwIJ2ty_f8LbewogfG09m2CZMvqKpcC8OaCg-ZD63wZ7HHgcPFTOqwkyCLQXR1t2pKbJ7fYWry511jdl7mCnDGPeSCgsQoUgTxjz94xuNt7ra-9JO2delGIgHnH2YkNcmenGuwZdB8xYY-cHd1uaYPn93YartcYTCIcGhtojoTd3PLN9JcZ3RYxI3-81OgW6Qn0z1AQx1qJwY0lvo8SoE7otdVfzl5WyZ6LIxx5TNwW36pFrG3E7CucFUDaOD4PdwuxEyHeNbNIlaGt1fHi7JASfFhdmUzqwHnjOuV0csV1KHWphUYVdE-97LMgqEX0SQfKvoKIM0dhtXXKgh4IWlyrWfrbHKfzBy4iIVRl8MQPIFRZG9C0O-Ojv5ZPjEoV1aosFZBAHG4wgXSzdr2Dj08FDLLs9SZvHKica-spx3ySRhXOLfO1yN_2vTAxvVPJYSfO-MCb_iwOfWIFoMmRk-Igt5PZ6rdEEOU151FKBjXB2qgQ4s2PAPmrKB_PZqtthkzT7k4w3T7ZL9UAO9lQXasYMPjMqmsqmjYPWgyezAk5Ygg3DCytPWQeAYrevfkEn-V-qpo3fP6nWCQEmYly4M5R8uBrcbhN_r2d9kgcImmz1v_zva505zWc46dCC_18rcQFjBRVNq2fy51WDRWP7XKkncpuH1nnsCPDR1WB1e8NazfTMVjwNefYXF-9GFs-CjdT_cTkrVqckA84g0izcRmd_Zwst5ORJvWXibXoGUaSxWnTr-wQh0svHHH7gQDyGuoVaprNm6f8a8YG0FnQsvbAkLAbaVl3tqTYBkEkw61rncpQa4UTwm7kVUtXyNzK4Wn54lqOQSjCgispQCgUh5gx2xMD2niI4-sMKByRwU1v4k4qLs3JNtnGFBDJ47E6iTarOz_Id5pNd3XdIpQqFwf-2obJ4nFpIecFqt31sOgg6li-0RHOiX-zmkQDbqTgRA-tinMk91aAzbY05rEq8tGdht6xHtq1DUcuW8unSktWLb9DKWHFf8LueNIC1J0UoEZBI43XGdG8zwYw_xtRf7B5yB9FGP4eTKnjZ6ua96QUwvUL1o0-ksRsxz7WaXSXYM9wIKv3BhzUTr5wE2x9jseHBZ0147xyCFnKb90rFI_3ub_R-yU_m9WL1FibzM_Q0PIAcrKimifvTV9YdCpv187ASLFS_zaFFsSkQ7tzs6xXMp4tGM3OXX2cmViVuTaVtoC49X3Pj3DvN7frA-oDhpXoYjwcGmLSGB5Ex_IiVTHO1jD5PG5Woh5DUnSBwCuwofljAhifS9KWGEkdzCpLyhNCKYkstnlVXH-CJgTkKHQXdE299c21PDvOeNP8fx3ayYnOC6AYD-lzsB6G_MIfkielUedbI9Qinz0DIVhmonNET0cePW2b1HXZcQj1yqlOLuwXwZqu7LBCo8JhU4r7Ky8a0bv4bSandfk44zL77u6eJmvU4QQP1q8TssTmMquegb_EjtqwBycTRra2ktmvnTk5266O1_THa34jh7W0rqSNP1xfC4L4FxlnCPDwuXS1EQYL7LxnPcF-LA_3AxgLdz3vVBNcna0Cn9mKL20VsU-wKTVpDCGrjkETWa4EQLiJrPu3T_579VFb5la78QTncZacS2btvmJC-m0VuUFvpMmHnyGudLdy6taaTPRj-mZ_t--o5KRGl8yTDpPdy-B_QJeGk6NA3IJ2Xzy5V61bv5jNZ-G98nwIQJDUywfdtyG987SWjStI1jBFjoPpLlW-RtqMkQRDfRZq8Nm4Z9gNgMNTBZIS4s8X9_RTBIxIBeR1NsHvfewtbDAqzl-diUtM9BaPuS4FAjt4_KRooz58noPho-nEKKUBVFCvOf4H9Ax67IdTX34nKiox0q3VE_3GylfeEhQL5HlWAV8Iviu4BIklvhmORvFkDgdcvBr_BK5BAJiY4ChhjxrvHv623A3b4BaSRP2MqmaVf54WMqmYjCro25CKraXfl9gBcW5EHlX-25nGUmoVH_y9WSP60SVbB_ZvSQCGZsXM72iNEmYNawsr4XrrxBfLUV7mzCEtZvYojiCTfQq2ZqowzBMQiZj5yOjwI1vAM-AebfB_U2F1gKpZmJiPBx5MGnhTgwxNA41GRzvDA91nK4D9CsgejwIAZE0Tji5EX-l89D2PkGpBUkD4EYmAPB4jruWH4ettIf8Nc-Grl9aOYR9sxUeh_rncFUdzBr3bhc2ZxZpTaFwSX5_mjrj9M8j1P-tdTxxgiwA1YnqjU1xW2WLkq5vGxmIeAWvd_f865PM0JmSz9dE079krCWBL-smncnUAM0uJixZNkdR16xLrIUSQX4s2DUbHauowY8hLVl7_2tilteZmkLGxi9rkuM34CA4Xl9QljefNMSZPGDzV3P90EKth4W1Z8fqAzw8CkaTyzS56U5eCQZA1vYo9Ck2bDAyWC_JT2GmVxtXa4j_zH-_vEC19CO7eRQzJ5vFjrK15Bvtasn7Bbp2OhLNxFbban4_z9WKb1JnaJ5HE0bWFdlcdb9ChirpMhdISeFSiMMblmpqOOGOfLVbVJ_E5Dk4gAjt3Vz7XpoYwXnMwCoi8FgkQI24QROJUeww_7sAwFLETy17ktNn4cW00EzWrTXbhjQHFUzeuK84zlMio-fB08ELAC5F-s_m-OZayeYyuniyfJra6Gpu0IZDFiEeb9CPEqBNw0pGM8MmCN1i29zsG7Lbimhdk69WJTDRvUbQMYxoA7KIVHg8tk1KWOsYcEsa45JQ-d7yXcGP3dOJbQI9g-1cVccCwP5paL7ZAho6NOuj0xN2Eo3vJj-seW_hdNUUfiksyb4y3iM739v6kKwoEudtxTpXObRaciaMVXbbZQa7k3E9SosAbjPvC0AHDP67yQdV0YXVipGiWmlqw-5oDsbcOVPQrI2aMjllIvSgKe3H7_tBhsHdr0zsCfxmKfTwZEMc0XK_2OLXnelvtHAeDlG7ctCHb6dBw2lsoqfAnL2t5LWLNXJnuZCxBrLzHNpbNeF1NcoWZG5GQp-r9aoHv6Qc_DydvtKbS2hT071-ocU3N37o66ygiYs1O2arfXzHNff4lUYtS5dFVPjRL_vYGB6nfljS-7Ze_444b1U6R3b5e8hWbZBZJJWFe_TyfFuTnnAaickQSLvgeuzJdcoazRgFSxH_YA-Txt4eicGpl2WXBzfpchIPVlEln1ageaH-6lEIgx9AZdHg6_3xpaBBrpnX3M4x-WbMZZRmh4c0ZGqxzrI0syLHnhXNrr0cVXI9ED9HOXaaLdPpj0TPRc0rl_IaKDT6bqrCFXcTc3exwtMc1hxLsf0XOtCz6wVmyEdGmpN7m&opi=122715837
              - img [ref=f5e29]
            - link [ref=f5e31] [cursor=pointer]:
              - /url: https://adssettings.google.com/whythisad?source=display&reasons=AZwrskWJp5mREj9nG7WHk-pjUP4T9kfNJewOasMMY-lpZXlJ9OWPjw-YiuYMcMd8T-14TOngfdx0VJrE0pNiLeQlpQGVOQ0WOzwIJ2ty_f8LbewogfG09m2CZMvqKpcC8OaCg-ZD63wZ7HHgcPFTOqwkyCLQXR1t2pKbJ7fYWry511jdl7mCnDGPeSCgsQoUgTxjz94xuNt7ra-9JO2delGIgHnH2YkNcmenGuwZdB8xYY-cHd1uaYPn93YartcYTCIcGhtojoTd3PLN9JcZ3RYxI3-81OgW6Qn0z1AQx1qJwY0lvo8SoE7otdVfzl5WyZ6LIxx5TNwW36pFrG3E7CucFUDaOD4PdwuxEyHeNbNIlaGt1fHi7JASfFhdmUzqwHnjOuV0csV1KHWphUYVdE-97LMgqEX0SQfKvoKIM0dhtXXKgh4IWlyrWfrbHKfzBy4iIVRl8MQPIFRZG9C0O-Ojv5ZPjEoV1aosFZBAHG4wgXSzdr2Dj08FDLLs9SZvHKica-spx3ySRhXOLfO1yN_2vTAxvVPJYSfO-MCb_iwOfWIFoMmRk-Igt5PZ6rdEEOU151FKBjXB2qgQ4s2PAPmrKB_PZqtthkzT7k4w3T7ZL9UAO9lQXasYMPjMqmsqmjYPWgyezAk5Ygg3DCytPWQeAYrevfkEn-V-qpo3fP6nWCQEmYly4M5R8uBrcbhN_r2d9kgcImmz1v_zva505zWc46dCC_18rcQFjBRVNq2fy51WDRWP7XKkncpuH1nnsCPDR1WB1e8NazfTMVjwNefYXF-9GFs-CjdT_cTkrVqckA84g0izcRmd_Zwst5ORJvWXibXoGUaSxWnTr-wQh0svHHH7gQDyGuoVaprNm6f8a8YG0FnQsvbAkLAbaVl3tqTYBkEkw61rncpQa4UTwm7kVUtXyNzK4Wn54lqOQSjCgispQCgUh5gx2xMD2niI4-sMKByRwU1v4k4qLs3JNtnGFBDJ47E6iTarOz_Id5pNd3XdIpQqFwf-2obJ4nFpIecFqt31sOgg6li-0RHOiX-zmkQDbqTgRA-tinMk91aAzbY05rEq8tGdht6xHtq1DUcuW8unSktWLb9DKWHFf8LueNIC1J0UoEZBI43XGdG8zwYw_xtRf7B5yB9FGP4eTKnjZ6ua96QUwvUL1o0-ksRsxz7WaXSXYM9wIKv3BhzUTr5wE2x9jseHBZ0147xyCFnKb90rFI_3ub_R-yU_m9WL1FibzM_Q0PIAcrKimifvTV9YdCpv187ASLFS_zaFFsSkQ7tzs6xXMp4tGM3OXX2cmViVuTaVtoC49X3Pj3DvN7frA-oDhpXoYjwcGmLSGB5Ex_IiVTHO1jD5PG5Woh5DUnSBwCuwofljAhifS9KWGEkdzCpLyhNCKYkstnlVXH-CJgTkKHQXdE299c21PDvOeNP8fx3ayYnOC6AYD-lzsB6G_MIfkielUedbI9Qinz0DIVhmonNET0cePW2b1HXZcQj1yqlOLuwXwZqu7LBCo8JhU4r7Ky8a0bv4bSandfk44zL77u6eJmvU4QQP1q8TssTmMquegb_EjtqwBycTRra2ktmvnTk5266O1_THa34jh7W0rqSNP1xfC4L4FxlnCPDwuXS1EQYL7LxnPcF-LA_3AxgLdz3vVBNcna0Cn9mKL20VsU-wKTVpDCGrjkETWa4EQLiJrPu3T_579VFb5la78QTncZacS2btvmJC-m0VuUFvpMmHnyGudLdy6taaTPRj-mZ_t--o5KRGl8yTDpPdy-B_QJeGk6NA3IJ2Xzy5V61bv5jNZ-G98nwIQJDUywfdtyG987SWjStI1jBFjoPpLlW-RtqMkQRDfRZq8Nm4Z9gNgMNTBZIS4s8X9_RTBIxIBeR1NsHvfewtbDAqzl-diUtM9BaPuS4FAjt4_KRooz58noPho-nEKKUBVFCvOf4H9Ax67IdTX34nKiox0q3VE_3GylfeEhQL5HlWAV8Iviu4BIklvhmORvFkDgdcvBr_BK5BAJiY4ChhjxrvHv623A3b4BaSRP2MqmaVf54WMqmYjCro25CKraXfl9gBcW5EHlX-25nGUmoVH_y9WSP60SVbB_ZvSQCGZsXM72iNEmYNawsr4XrrxBfLUV7mzCEtZvYojiCTfQq2ZqowzBMQiZj5yOjwI1vAM-AebfB_U2F1gKpZmJiPBx5MGnhTgwxNA41GRzvDA91nK4D9CsgejwIAZE0Tji5EX-l89D2PkGpBUkD4EYmAPB4jruWH4ettIf8Nc-Grl9aOYR9sxUeh_rncFUdzBr3bhc2ZxZpTaFwSX5_mjrj9M8j1P-tdTxxgiwA1YnqjU1xW2WLkq5vGxmIeAWvd_f865PM0JmSz9dE079krCWBL-smncnUAM0uJixZNkdR16xLrIUSQX4s2DUbHauowY8hLVl7_2tilteZmkLGxi9rkuM34CA4Xl9QljefNMSZPGDzV3P90EKth4W1Z8fqAzw8CkaTyzS56U5eCQZA1vYo9Ck2bDAyWC_JT2GmVxtXa4j_zH-_vEC19CO7eRQzJ5vFjrK15Bvtasn7Bbp2OhLNxFbban4_z9WKb1JnaJ5HE0bWFdlcdb9ChirpMhdISeFSiMMblmpqOOGOfLVbVJ_E5Dk4gAjt3Vz7XpoYwXnMwCoi8FgkQI24QROJUeww_7sAwFLETy17ktNn4cW00EzWrTXbhjQHFUzeuK84zlMio-fB08ELAC5F-s_m-OZayeYyuniyfJra6Gpu0IZDFiEeb9CPEqBNw0pGM8MmCN1i29zsG7Lbimhdk69WJTDRvUbQMYxoA7KIVHg8tk1KWOsYcEsa45JQ-d7yXcGP3dOJbQI9g-1cVccCwP5paL7ZAho6NOuj0xN2Eo3vJj-seW_hdNUUfiksyb4y3iM739v6kKwoEudtxTpXObRaciaMVXbbZQa7k3E9SosAbjPvC0AHDP67yQdV0YXVipGiWmlqw-5oDsbcOVPQrI2aMjllIvSgKe3H7_tBhsHdr0zsCfxmKfTwZEMc0XK_2OLXnelvtHAeDlG7ctCHb6dBw2lsoqfAnL2t5LWLNXJnuZCxBrLzHNpbNeF1NcoWZG5GQp-r9aoHv6Qc_DydvtKbS2hT071-ocU3N37o66ygiYs1O2arfXzHNff4lUYtS5dFVPjRL_vYGB6nfljS-7Ze_444b1U6R3b5e8hWbZBZJJWFe_TyfFuTnnAaickQSLvgeuzJdcoazRgFSxH_YA-Txt4eicGpl2WXBzfpchIPVlEln1ageaH-6lEIgx9AZdHg6_3xpaBBrpnX3M4x-WbMZZRmh4c0ZGqxzrI0syLHnhXNrr0cVXI9ED9HOXaaLdPpj0TPRc0rl_IaKDT6bqrCFXcTc3exwtMc1hxLsf0XOtCz6wVmyEdGmpN7m&opi=122715837
              - img [ref=f5e33]
          - img [ref=f5e36] [cursor=pointer]
          - generic [ref=f5e47]:
            - img [ref=f5e50]
            - generic [ref=f5e53]:
              - text: Ads by
              - img [ref=f5e54]
            - generic [ref=f5e57]:
              - generic [ref=f5e60] [cursor=pointer]: Ad options
              - generic [ref=f5e63] [cursor=pointer]: Send feedback
              - link [ref=f5e65] [cursor=pointer]:
                - /url: https://adssettings.google.com/whythisad?source=display&reasons=AZwrskWJp5mREj9nG7WHk-pjUP4T9kfNJewOasMMY-lpZXlJ9OWPjw-YiuYMcMd8T-14TOngfdx0VJrE0pNiLeQlpQGVOQ0WOzwIJ2ty_f8LbewogfG09m2CZMvqKpcC8OaCg-ZD63wZ7HHgcPFTOqwkyCLQXR1t2pKbJ7fYWry511jdl7mCnDGPeSCgsQoUgTxjz94xuNt7ra-9JO2delGIgHnH2YkNcmenGuwZdB8xYY-cHd1uaYPn93YartcYTCIcGhtojoTd3PLN9JcZ3RYxI3-81OgW6Qn0z1AQx1qJwY0lvo8SoE7otdVfzl5WyZ6LIxx5TNwW36pFrG3E7CucFUDaOD4PdwuxEyHeNbNIlaGt1fHi7JASfFhdmUzqwHnjOuV0csV1KHWphUYVdE-97LMgqEX0SQfKvoKIM0dhtXXKgh4IWlyrWfrbHKfzBy4iIVRl8MQPIFRZG9C0O-Ojv5ZPjEoV1aosFZBAHG4wgXSzdr2Dj08FDLLs9SZvHKica-spx3ySRhXOLfO1yN_2vTAxvVPJYSfO-MCb_iwOfWIFoMmRk-Igt5PZ6rdEEOU151FKBjXB2qgQ4s2PAPmrKB_PZqtthkzT7k4w3T7ZL9UAO9lQXasYMPjMqmsqmjYPWgyezAk5Ygg3DCytPWQeAYrevfkEn-V-qpo3fP6nWCQEmYly4M5R8uBrcbhN_r2d9kgcImmz1v_zva505zWc46dCC_18rcQFjBRVNq2fy51WDRWP7XKkncpuH1nnsCPDR1WB1e8NazfTMVjwNefYXF-9GFs-CjdT_cTkrVqckA84g0izcRmd_Zwst5ORJvWXibXoGUaSxWnTr-wQh0svHHH7gQDyGuoVaprNm6f8a8YG0FnQsvbAkLAbaVl3tqTYBkEkw61rncpQa4UTwm7kVUtXyNzK4Wn54lqOQSjCgispQCgUh5gx2xMD2niI4-sMKByRwU1v4k4qLs3JNtnGFBDJ47E6iTarOz_Id5pNd3XdIpQqFwf-2obJ4nFpIecFqt31sOgg6li-0RHOiX-zmkQDbqTgRA-tinMk91aAzbY05rEq8tGdht6xHtq1DUcuW8unSktWLb9DKWHFf8LueNIC1J0UoEZBI43XGdG8zwYw_xtRf7B5yB9FGP4eTKnjZ6ua96QUwvUL1o0-ksRsxz7WaXSXYM9wIKv3BhzUTr5wE2x9jseHBZ0147xyCFnKb90rFI_3ub_R-yU_m9WL1FibzM_Q0PIAcrKimifvTV9YdCpv187ASLFS_zaFFsSkQ7tzs6xXMp4tGM3OXX2cmViVuTaVtoC49X3Pj3DvN7frA-oDhpXoYjwcGmLSGB5Ex_IiVTHO1jD5PG5Woh5DUnSBwCuwofljAhifS9KWGEkdzCpLyhNCKYkstnlVXH-CJgTkKHQXdE299c21PDvOeNP8fx3ayYnOC6AYD-lzsB6G_MIfkielUedbI9Qinz0DIVhmonNET0cePW2b1HXZcQj1yqlOLuwXwZqu7LBCo8JhU4r7Ky8a0bv4bSandfk44zL77u6eJmvU4QQP1q8TssTmMquegb_EjtqwBycTRra2ktmvnTk5266O1_THa34jh7W0rqSNP1xfC4L4FxlnCPDwuXS1EQYL7LxnPcF-LA_3AxgLdz3vVBNcna0Cn9mKL20VsU-wKTVpDCGrjkETWa4EQLiJrPu3T_579VFb5la78QTncZacS2btvmJC-m0VuUFvpMmHnyGudLdy6taaTPRj-mZ_t--o5KRGl8yTDpPdy-B_QJeGk6NA3IJ2Xzy5V61bv5jNZ-G98nwIQJDUywfdtyG987SWjStI1jBFjoPpLlW-RtqMkQRDfRZq8Nm4Z9gNgMNTBZIS4s8X9_RTBIxIBeR1NsHvfewtbDAqzl-diUtM9BaPuS4FAjt4_KRooz58noPho-nEKKUBVFCvOf4H9Ax67IdTX34nKiox0q3VE_3GylfeEhQL5HlWAV8Iviu4BIklvhmORvFkDgdcvBr_BK5BAJiY4ChhjxrvHv623A3b4BaSRP2MqmaVf54WMqmYjCro25CKraXfl9gBcW5EHlX-25nGUmoVH_y9WSP60SVbB_ZvSQCGZsXM72iNEmYNawsr4XrrxBfLUV7mzCEtZvYojiCTfQq2ZqowzBMQiZj5yOjwI1vAM-AebfB_U2F1gKpZmJiPBx5MGnhTgwxNA41GRzvDA91nK4D9CsgejwIAZE0Tji5EX-l89D2PkGpBUkD4EYmAPB4jruWH4ettIf8Nc-Grl9aOYR9sxUeh_rncFUdzBr3bhc2ZxZpTaFwSX5_mjrj9M8j1P-tdTxxgiwA1YnqjU1xW2WLkq5vGxmIeAWvd_f865PM0JmSz9dE079krCWBL-smncnUAM0uJixZNkdR16xLrIUSQX4s2DUbHauowY8hLVl7_2tilteZmkLGxi9rkuM34CA4Xl9QljefNMSZPGDzV3P90EKth4W1Z8fqAzw8CkaTyzS56U5eCQZA1vYo9Ck2bDAyWC_JT2GmVxtXa4j_zH-_vEC19CO7eRQzJ5vFjrK15Bvtasn7Bbp2OhLNxFbban4_z9WKb1JnaJ5HE0bWFdlcdb9ChirpMhdISeFSiMMblmpqOOGOfLVbVJ_E5Dk4gAjt3Vz7XpoYwXnMwCoi8FgkQI24QROJUeww_7sAwFLETy17ktNn4cW00EzWrTXbhjQHFUzeuK84zlMio-fB08ELAC5F-s_m-OZayeYyuniyfJra6Gpu0IZDFiEeb9CPEqBNw0pGM8MmCN1i29zsG7Lbimhdk69WJTDRvUbQMYxoA7KIVHg8tk1KWOsYcEsa45JQ-d7yXcGP3dOJbQI9g-1cVccCwP5paL7ZAho6NOuj0xN2Eo3vJj-seW_hdNUUfiksyb4y3iM739v6kKwoEudtxTpXObRaciaMVXbbZQa7k3E9SosAbjPvC0AHDP67yQdV0YXVipGiWmlqw-5oDsbcOVPQrI2aMjllIvSgKe3H7_tBhsHdr0zsCfxmKfTwZEMc0XK_2OLXnelvtHAeDlG7ctCHb6dBw2lsoqfAnL2t5LWLNXJnuZCxBrLzHNpbNeF1NcoWZG5GQp-r9aoHv6Qc_DydvtKbS2hT071-ocU3N37o66ygiYs1O2arfXzHNff4lUYtS5dFVPjRL_vYGB6nfljS-7Ze_444b1U6R3b5e8hWbZBZJJWFe_TyfFuTnnAaickQSLvgeuzJdcoazRgFSxH_YA-Txt4eicGpl2WXBzfpchIPVlEln1ageaH-6lEIgx9AZdHg6_3xpaBBrpnX3M4x-WbMZZRmh4c0ZGqxzrI0syLHnhXNrr0cVXI9ED9HOXaaLdPpj0TPRc0rl_IaKDT6bqrCFXcTc3exwtMc1hxLsf0XOtCz6wVmyEdGmpN7m&opi=122715837
                - generic [ref=f5e66]:
                  - text: Why this ad?
                  - img [ref=f5e67]
          - generic [ref=f5e69]:
            - generic [ref=f5e72] [cursor=pointer]: Seen this ad multiple times
            - generic [ref=f5e75] [cursor=pointer]: Ad covered content
            - generic [ref=f5e78] [cursor=pointer]: Not interested in this ad
            - generic [ref=f5e81] [cursor=pointer]: Ad was inappropriate
          - generic [ref=f5e87]: Thanks. Feedback improves Google ads
          - generic [ref=f5e93]:
            - text: Ad closed by
            - img [ref=f5e94]
          - generic [ref=f5e101]:
            - img [ref=f5e104]
            - generic [ref=f5e106]:
              - generic [ref=f5e108]: Personalize ads on this site
              - link [ref=f5e112] [cursor=pointer]:
                - /url: https://support.google.com/ads/answer/10923348
                - generic [ref=f5e113]:
                  - text: Learn more
                  - img [ref=f5e114]
  - contentinfo [ref=e131]:
    - generic [ref=e132]: © 2013-2026 TOOLSQA.COM | ALL RIGHTS RESERVED.
```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | 
  3  | test('mouse actions practice', async ({ page }) => {
  4  | 
  5  |     await page.goto('https://demoqa.com/droppable');
  6  | 
  7  |     const source = page.locator('#draggable')
  8  |     const destination = page.locator('#droppable').first();
  9  |     await source.dragTo(destination);
> 10 |     await expect(destination.locator('p')).toHaveText('Dropped!')
     |                                            ^ Error: expect(locator).toHaveText(expected) failed
  11 | 
  12 | }
  13 | )
```