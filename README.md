# eBay Related Best Seller Products – Automation Testing

## Project Overview

This project is an automation testing suite built using **Playwright** with the **Page Object Model (POM)** design pattern. The objective is to verify the **Related products that are best sellers** section on eBay product page based on 10 derived test cases from the manual details test cases.

Test cases that are covered from manual detailed test cases:
1.	TC01 - Display the related best seller products section.
2.	TC02 - Verify the visibility of maximum 6 products count.
3.	TC03 - Verify the best seller product categories are same.
4.	TC04 - Verify the price range logic.
5.	TC06 - Verify the product image is displaying.
6.	TC08 - Verify the details of the products are displaying.
7.	TC10 - Responsiveness of the feature.
8.	TC13 - Main product itself and duplicate products are displaying.
9.	TC16 - Page refresh
10.	TC17 - The visibility of related best seller products section.


## Technical Implementation Details

* Framework: Playwright (JavaScript)
* Architecture: Page Object Model (POM)


## Important note on Execution and security

As eBay is a live production environment, it employs strict Bot Detection and Captcha protections.

1.	The Search functionality: the code for navigating via the search bar and the button clicking for search is commented out in the project.js file. This also causes for the failure of the tests on GitHub Actions (CI).
a.	Reason: Automation-driven searching often triggers **access denied** or captcha blocks on eBay. Preventing the test from reaching the target product page.
b.	Solution: to test the main actions, the script navigates directly to the main product page URL to verify the related best seller products.
2.	Timeouts: due to dynamic content loading and security challenges on a live site execution may occasionally encounter timeout errors. However, the script logic is mapped to the requirements and is designed to work seamlessly in a standard QA environment.
