## 5 - Float Demo

This folder contains a small HTML page that **demonstrates how CSS floats work**, and how to fix layout issues using **clear** and **overflow**.

### What `index.html` shows

- **Basic floats (left and right)**  
  - Two boxes: one with `float: left`, one with `float: right`.  
  - Normal text flows around the floated boxes.  
  - A `.clearfix` element with `clear: both;` is used to push later content *below* the floats.

- **Parent without clear / overflow (problem)**  
  - A `.parent.no-fix` container with a child that has `float: left`.  
  - Because the child is floated and the parent does not clear or handle overflow,  
    the parent’s height appears collapsed and its border does not fully surround the child.

- **Parent with overflow fix (solution)**  
  - A `.parent.overflow-fix` container with the same floated child.  
  - The parent uses `overflow: auto;`, so it expands to contain the floated child’s height.  
  - This is one common way to fix the “collapsed parent” problem caused by floats.

- **Another clear example on content itself**  
  - A small box is floated to the left using `.float-small`.  
  - One paragraph flows around the float.  
  - A second paragraph uses `.cleared-paragraph` with `clear: left;`, so it starts below the floated box instead of wrapping around it.  
  - This shows how you can apply `clear` directly to content, not only to special “clearfix” elements.

You can use this page in class to:

- Show how **floats remove elements from normal document flow**.  
- Demonstrate why we need **clear** or **overflow** (or other clearfix techniques).  
- Compare a broken layout (collapsed parent) with a fixed one.

