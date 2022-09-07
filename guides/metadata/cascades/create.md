---
related_endpoints:
  - post_metadata_cascade_policies
related_guides:
  - metadata/cascades/list
  - metadata/cascades/force-apply
  - metadata/cascades/delete
related_resources:
  - metadata_cascade_policy
category_id: metadata
subcategory_id: metadata/6-cascades
is_index: false
id: metadata/cascades/create
rank: 3
type: guide
total_steps: 5
sibling_id: metadata/cascades
parent_id: metadata/cascades
next_page_id: metadata/cascades/force-apply
previous_page_id: metadata/cascades/get
source_url: >-
  https://github.com/box/developer.box.com/blob/main/content/guides/metadata/6-cascades/3-create.md
---
# Create a metadata cascade policy

When a metadata template has been applied to a folder, a metadata cascade policy
can be created by calling the  [`POST /metadata_cascade_policies`][e_post] API
endpoint with the `folder_id` of the folder to apply the policy to, and the
`scope` and `templateKey` of metadata template to.

<Samples id='post_metadata_cascade_policies' >

</Samples>

<Message>

To get the `scope` and `templateKey` for a template, either
[list all metadata templates][g_list_templates], or
[list all instances on an file][g_list_instances_item].

</Message>

<Message warning>

A cascade policy can only be created if a metadata instance has already been
applied to the folder with the given `scope` and `templateKey`.

</Message>

[e_post]: e://post_metadata_cascade_policies
[g_list_templates]: g://metadata/templates/list
[g_list_instances_item]: g://metadata/instances/list