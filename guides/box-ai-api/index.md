---
rank: 75
related_guides:
  - box-ai-api/q-n-a
  - box-ai-api/text-gen
  - box-ai-api/metadata-suggestions
category_id: box-ai-api
subcategory_id: null
is_index: true
id: box-ai-api
type: guide
total_steps: 6
sibling_id: guides
parent_id: guides
next_page_id: ''
previous_page_id: box-ai-api/authentication
source_url: >-
  https://github.com/box/developer.box.com/blob/main/content/guides/box-ai-api/index.md
---
# Box AI API

The Box AI API is a way to extend the power of Box AI to your custom
applications. Imagine the Box AI Q&A functionality built into your third party
integration, or the ability to generate content like you can in Notes, right in
your product’s content editor.

The API is built with ease of use in mind. Call the API, provide your
document(s) or content, and provide your prompt.

## Capabilities

The API provides a number of capabilities designed to help you build LLM into
your customer applications work flows. You can build Q&A, generate text, and
even provide a Metadata template and ask Box AI to suggest values. All within
the Box Platform you are already using for your other content integrations.

### Q&A

Think of Q&A as a chatbot. Provide the Box file ID(s) of the content you want
to interact with, provide a prompt, and ask the Large Language Model (LLM).

### Text Generation

Much like the functionality Box AI provides inside of Notes, generate text with
the power of LLM. You must still provide a Box file ID and a prompt.

### Metadata Suggestions

With Metadata suggestions, you must provide a Metadata template key and a Box
file ID and the LLM will evaluate your content against the template and make
suggestions as to the values to apply. You can then evaluate the suggestions
and use the Box Platform's Metadata API to apply if you so choose.