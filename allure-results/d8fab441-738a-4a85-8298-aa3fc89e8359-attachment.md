# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: HandleWindow.spec.ts >> handlewindow
- Location: tests\HandleWindow.spec.ts:2:5

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: page.waitForEvent: Test timeout of 30000ms exceeded.
=========================== logs ===========================
waiting for event "popup"
============================================================
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
      - generic [ref=e37]:
        - generic [ref=e39] [cursor=pointer]:
          - generic [ref=e40]:
            - img [ref=e42]
            - text: Alerts, Frame & Windows
          - img [ref=e47]
        - list [ref=e50]:
          - listitem [ref=e51] [cursor=pointer]:
            - link "Browser Windows" [ref=e52]:
              - /url: /browser-windows
              - img [ref=e53]
              - text: Browser Windows
          - listitem [ref=e55] [cursor=pointer]:
            - link "Alerts" [ref=e56]:
              - /url: /alerts
              - img [ref=e57]
              - text: Alerts
          - listitem [ref=e59] [cursor=pointer]:
            - link "Frames" [ref=e60]:
              - /url: /frames
              - img [ref=e61]
              - text: Frames
          - listitem [ref=e63] [cursor=pointer]:
            - link "Nested Frames" [ref=e64]:
              - /url: /nestedframes
              - img [ref=e65]
              - text: Nested Frames
          - listitem [ref=e67] [cursor=pointer]:
            - link "Modal Dialogs" [ref=e68]:
              - /url: /modal-dialogs
              - img [ref=e69]
              - text: Modal Dialogs
      - generic [ref=e73] [cursor=pointer]:
        - generic [ref=e74]:
          - img [ref=e76]
          - text: Widgets
        - img [ref=e82]
      - generic [ref=e86] [cursor=pointer]:
        - generic [ref=e87]:
          - img [ref=e89]
          - text: Interactions
        - img [ref=e94]
      - generic [ref=e98] [cursor=pointer]:
        - generic [ref=e99]:
          - img [ref=e101]
          - text: Book Store Application
        - img [ref=e106]
    - generic [ref=e109]:
      - heading "Browser Windows" [level=1] [ref=e110]
      - button "New Tab" [ref=e112] [cursor=pointer]
      - button "New Window" [ref=e114] [cursor=pointer]
      - button "New Window Message" [ref=e116] [cursor=pointer]
  - contentinfo [ref=e123]:
    - generic [ref=e124]: © 2013-2026 TOOLSQA.COM | ALL RIGHTS RESERVED.
```

# Test source

```ts
  1  | import { test, expect } from "@playwright/test"
  2  | test('handlewindow', async ({ page }) => {
  3  | 
  4  |     await page.goto('https://demoqa.com/browser-windows')
  5  |     const [newwindow] = await Promise.all(
  6  | 
> 7  |         [page.waitForEvent('popup'),
     |               ^ Error: page.waitForEvent: Test timeout of 30000ms exceeded.
  8  |         page.getByRole('button', { name: 'New Window' })
  9  |         ]
  10 |     )
  11 |     await expect(newwindow.locator('h1')).toHaveText('This is a sample page')
  12 | })
```