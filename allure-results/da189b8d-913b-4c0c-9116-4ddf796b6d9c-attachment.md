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
  - contentinfo [ref=e128]:
    - generic [ref=e129]: © 2013-2026 TOOLSQA.COM | ALL RIGHTS RESERVED.
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