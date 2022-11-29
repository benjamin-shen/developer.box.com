---
rank: 6
related_endpoints: []
related_guides:
  - webhooks/v2/create-v2
  - webhooks/v2/update-v2
required_guides: []
alias_paths:
  - /webhooks/limitations
category_id: webhooks
subcategory_id: webhooks/v2
is_index: false
id: webhooks/v2/limitations-v2
type: guide
total_steps: 6
sibling_id: webhooks/v2
parent_id: webhooks/v2
next_page_id: ''
previous_page_id: webhooks/v2/signatures-v2
source_url: >-
  https://github.com/box/developer.box.com/blob/main/content/guides/webhooks/v2/limitations-v2.md
fullyTranslated: true
---
# 制限

## Webhookは1項目につき1つ

Webhookは、1つの項目 (ファイルまたはフォルダ)、1つのアプリケーション、1人の認証済みユーザーごとに1つだけという制限があります。

ある項目にWebhookを1つ追加した後は、たとえ別のトリガーイベントに応答するWebhookであっても、2つ目を追加することはできません。

例: `CleanupApp`というアプリケーションに関する`Junk`というフォルダ内の`FILE.UPLOADED`イベントを監視するように、`John Doe`によってWebhookが1つ設定されると、その時点で、`FILE.DOWNLOADED`イベントに対してトリガーされるものであっても、`John Doe`によって`CleanupApp`が`Junk`フォルダに2つ目のWebhookを追加することはできません。

別のイベントをリッスンするには、既存のWebhookを[更新][update]するか、新しいアプリケーションを作成します。

## Webhookの上限は1000個

各アプリケーションおよび各ユーザーのWebhookの数は1,000個までという制限があります。

1人のユーザーにさらにWebhookを作成するには、別のアプリケーションを作成するか、フォルダツリーでより上位に適用するよう[既存のWebhookを更新][update]します。

## 通知URLに関する制約事項

Webhookの通知URL (`address`) は、有効なIPアドレスに解決される有効なHTTPS URLでなくてはなりません。これには、信頼できる認証局によって署名された証明書が必要になります。Boxでは自己署名SSL証明書がサポートされていません。

サーバーのIPアドレスは、インターネットからパブリックにアクセスできる必要があり、`(*.)box.com`アドレスにすることはできません。URLで使用されるポートは、標準HTTPSポート (`443`) でなければなりません。通知は他のポートには配信されません。

## Webhookはルートフォルダに追加不可

V2 Webhookをルートフォルダ (IDが`0`のフォルダ) に作成することはできません。代わりに[V1 Webhook][v1]を使用する必要があります。

<Message type="notice">

項目の権限が原因でアクションを実行できない場合、試行されたアクションについての通知は送信されません。

</Message>

## Webhookの削除理由

Webhookは以下の理由で削除される可能性があります。

1. Boxアプリケーションを削除すると、そのアプリケーションに関連付けられているすべてのWebhookが自動的に削除されます。
2. Webhookに関連付けられているアクティブなアクセストークンをすべて削除すると、そのWebhookが自動的に削除されます。これには、開発者トークンとパスワードが含まれます。
3. 最後に成功した配信から30日が経過し、最後に配信が成功した日から最後のトリガーの日付までの期間が14日を超えた場合、Webhookは自動的に削除されます。

これらのすべてのケースで、Boxは`WEBHOOK.DELETED`というイベント名を含むWebhookペイロードを通知URLに送信します。ペイロードの本文には以下の追加情報が含まれます。

```json
"additional_info": {
  "reason": "auto_cleanup"
}
```

[v1]: g://webhooks/v1

[update]: g://webhooks/v2/update-v2
