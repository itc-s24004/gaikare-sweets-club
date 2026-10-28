import { AppView } from "@/libs/element/layout";
import { Content } from "@/libs/element/layout/content";
import { ContentWrapper } from "@/libs/element/layout/contentWrapper";
import { Navigation } from "@/libs/element/layout/navigation";

export function PageView() {
    return (
        <AppView>
            <ContentWrapper>
                <Content>
                    <article className="space-y-8 pb-8 leading-7 text-gray-700">
                        <header className="border-b pb-6">
                            <p className="mb-2 text-sm font-semibold tracking-widest">PRIVACY POLICY</p>
                            <h1 className="text-3xl font-bold text-gray-900">プライバシーポリシー</h1>
                            <h2 className="mt-3 text-xl font-semibold">ガイカレまつりモバイルオーダー プライバシーポリシー</h2>
                        </header>

                        <p>
                            ITカレッジ沖縄ITスペシャリスト科（以下「当団体」）は、ガイカレまつりモバイルオーダー（以下「本アプリ」）における利用者情報を、以下のとおり適切に取り扱います。
                        </p>

                        <section className="space-y-3">
                            <h3>第1条(取得する情報)</h3>
                            <p>本アプリでは、利用者のGoogleアカウントに紐づくGoogleメールアドレスを取得します。</p>
                            <p>取得した情報は保存時に暗号化して管理します。</p>
                        </section>

                        <section className="space-y-3">
                            <h3>第2条(利用目的)</h3>
                            <p>当団体は、取得した情報を、以下の目的に限って利用します。</p>
                            <ul className="list-disc space-y-2 pl-6">
                                <li>ログインおよび本人確認</li>
                                <li>注文の受付、調理、受け渡し、呼び出し</li>
                                <li>学園祭の運営および販売実績の確認</li>
                            </ul>
                            <p>上記以外の目的には利用しません。</p>
                        </section>

                        <section className="space-y-3">
                            <h3>第3条(第三者提供)</h3>
                            <p>当団体は、法令に基づく場合を除き、取得した情報を第三者に提供または販売しません。</p>
                        </section>

                        <section className="space-y-3">
                            <h3>第4条(保存期間)</h3>
                            <p>取得した情報は、学園祭終了後5か月（成果発表での売上確認、卒業に伴う対応などが完了した時点）まで保管し、その後適切に削除します。</p>
                        </section>

                        <section className="space-y-3">
                            <h3>第5条(開示・削除の依頼)</h3>
                            <p>ご自身の情報の確認、修正、削除を希望する場合は、以下までご連絡ください。</p>
                        </section>

                        <section className="space-y-3">
                            <h3>第6条(お問い合わせ)</h3>
                            <address className="not-italic font-medium text-gray-900">
                                ITカレッジ沖縄ITスペシャリスト科実行委員会<br />
                                メール：s24004@std.it-college.ac.jp
                            </address>
                        </section>

                        <footer className="border-t pt-4 text-sm text-gray-500">制定日:2026年10月27日</footer>
                    </article>
                </Content>
                <Navigation />
            </ContentWrapper>
        </AppView>
    )
}