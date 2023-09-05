---
hide: true
category_id: internal-documentation
subcategory_id: internal-documentation/ui-elements
is_index: false
id: internal-documentation/ui-elements/tabs
rank: 0
type: guide
total_steps: 9
sibling_id: internal-documentation/ui-elements
parent_id: internal-documentation/ui-elements
next_page_id: internal-documentation/ui-elements
previous_page_id: ''
source_url: >-
  https://github.com/box/developer.box.com/blob/main/content/guides/internal-documentation/ui-elements/tabs.md
---
<!-- does not need translation -->

# Tabs

To add items to a tab, first create a `Tabs` object and then within that
multiple `Tab` items with titles. If those tabs are meant to display code
samples, you will need to refer to the [markdown code block][code_block_guide]
guide as well.

```html
<Tabs>
  <Tab title='Node'>
    Node
  </Tab>
  <Tab title='.NET'>
    .NET
  </Tab>
</Tabs>
```

<H>

<Tabs>

<Tab title='Node'>

Node

</Tab>

<Tab title='.NET'>

.NET

</Tab>

</Tabs>

</H>

Tabs use cookies to try and remember the user's choice. Please use the standard
title `cURL`, `Java`, `.NET`, `Python` and `Node` to refer to our currently
supported languages and the user will automatically be presented with the
sample in their language of choice.

[code_block_guide]: guides://internal-documentation/markdown/code-blocks