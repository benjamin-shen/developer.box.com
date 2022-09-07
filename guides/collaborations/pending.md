---
rank: 4
related_endpoints:
  - get_collaborations
related_guides:
  - collaborations/share-content
required_guides: []
related_resources:
  - collaboration
  - user
category_id: collaborations
subcategory_id: null
is_index: false
id: collaborations/pending
type: guide
total_steps: 3
sibling_id: collaborations
parent_id: collaborations
next_page_id: collaborations
previous_page_id: collaborations/groups
source_url: >-
  https://github.com/box/developer.box.com/blob/main/content/guides/collaborations/pending.md
---
# Get Pending Collaborations

To get the pending collaborations for a user, call the `GET /collaborations` API
with a `status` of `pending`.

<Samples id='get_collaborations' >

</Samples>

<Message warning>

This only returns the current list of pending collaborations for a user. This
API does not allow for returning all collaborations for a user.

</Message>