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
                            <p className="mb-2 text-sm font-semibold tracking-widest">TERMS OF SERVICE</p>
                            <h1 className="text-3xl font-bold text-gray-900">利用規約</h1>
                            <h2 className="mt-3 text-xl font-semibold">ガイカレまつりモバイルオーダー 利用規約</h2>
                        </header>

                        <p>この利用規約(以下「本規約」)は、ITカレッジ沖縄イベント実行委員(以下「当団体」)が提供する「ガイカレまつりモバイルオーダー」(以下「本アプリ」)の利用条件を定めるものです。利用者は、本規約に同意したうえで本アプリを利用するものとします。</p>

                        <section className="space-y-3">
                            <h3>第1条(適用)</h3>
                            <p>本規約は、本アプリの利用に関する当団体と利用者との間のすべての関係に適用されます。</p>
                        </section>
                        <section className="space-y-3">
                            <h3>第2条(定義)</h3>
                            <ul className="list-disc space-y-2 pl-6">
                                <li>「利用者」とは、本規約に同意し、本アプリを利用するすべての方をいいます。</li>
                                <li>「注文」とは、利用者が本アプリを通じて当団体の出店する商品の購入を申し込むことをいいます。</li>
                                <li>「ガイカレまつり」とは、ITカレッジ沖縄、沖縄ビジネス外語学院が毎年開催する学園祭をいいます。</li>
                            </ul>
                        </section>
                        <section className="space-y-3">
                            <h3>第3条(利用条件)</h3>
                            <ul className="list-disc space-y-2 pl-6"><li>本アプリの利用には、Googleアカウントでのログインが必要です。</li><li>本アプリは、各年度のガイカレまつりの開催期間中に限り提供します。</li><li>未成年の利用者は、保護者の同意を得たうえで本アプリを利用してください。</li><li>本アプリの利用料は無料です。ただし、通信料は利用者の負担となります。</li></ul>
                        </section>
                        <section className="space-y-3"><h3>第4条(注文)</h3><p>注文は、利用者が本アプリで注文を確定した時点で成立します。品切れ、混雑その他の事情により、当団体は注文を受け付けられない場合があります。この場合、当団体は本アプリ上でその旨を通知します。1回の注文の上限は在庫限りまでとします。</p></section>
                        <section className="space-y-3"><h3>第5条(支払い)</h3><p>代金は、商品の受け取り時に、出店の受付で現金でのみお支払い可能です。本アプリ上で決済は行いません。</p></section>
                        <section className="space-y-3"><h3>第6条(キャンセル・受け取り)</h3><p>調理開始前の注文は、本アプリ上でキャンセルできます。調理開始後のキャンセルはできません。利用者は、本アプリで呼び出しを受けた後、15分以内に出店で商品を受け取ってください。前項の時間を過ぎても受け取りがない場合、当団体は注文を取り消すことがあります。</p></section>
                        <section className="space-y-3"><h3>第7条(禁止事項)</h3><p>利用者は、本アプリの利用にあたり、次の行為をしてはなりません。</p><ul className="list-disc space-y-2 pl-6"><li>受け取る意思のない注文、いたずら目的の注文</li><li>他人のGoogleアカウントを使用する行為、他人になりすます行為</li><li>本アプリやサーバーへの不正アクセス、過度な負荷をかける行為</li><li>本アプリの不具合を意図的に利用する行為</li><li>当団体、他の利用者または第三者に迷惑・不利益を与える行為</li><li>法令または公序良俗に反する行為</li><li>その他、当団体が不適切と判断する行為</li></ul></section>
                        <section className="space-y-3"><h3>第8条(利用の停止)</h3><p>当団体は、利用者が本規約に違反した場合、事前の通知なく、その利用者の注文の取消しや本アプリの利用停止を行うことができます。</p></section>
                        <section className="space-y-3"><h3>第9条(サービスの変更・停止)</h3><p>当団体は、混雑、システムの不具合、天候その他やむを得ない事情がある場合、事前の通知なく、本アプリの内容を変更し、または提供を一時的もしくは全面的に停止することができます。</p></section>
                        <section className="space-y-3"><h3>第10条(個人情報の取り扱い)</h3><p>当団体は、本アプリの利用により取得した個人情報を、別途定めるプライバシーポリシーに従って適切に取り扱います。</p></section>
                        <section className="space-y-3"><h3>第11条(免責)</h3><p>当団体は、通信環境や端末の不具合、システム障害等により本アプリが利用できなかったことについて、責任を負いません。当団体は、本アプリの利用に関して利用者に生じた損害について、責任を負いません。ただし、当団体の故意または重大な過失による場合はこの限りではありません。食物アレルギーについては、各商品の表示を確認し、不明な点は出店の担当者にお問い合わせください。</p></section>
                        <section className="space-y-3"><h3>第12条(規約の変更)</h3><p>当団体は、必要に応じて本規約を変更できます。変更後の規約は、本アプリ上に掲示した時点から効力を生じます。</p></section>
                        <section className="space-y-3"><h3>第13条(準拠法)</h3><p>本規約の解釈には、日本法を準拠法とします。</p></section>
                        <section className="space-y-3"><h3>第14条(お問い合わせ)</h3><p>本アプリに関するお問い合わせは、以下までご連絡ください。</p><address className="not-italic font-medium text-gray-900">ITカレッジ沖縄ITスペシャリスト科実行委員会</address></section>

                        <footer className="border-t pt-4 text-sm text-gray-500">制定日:2026年10月27日</footer>
                    </article>
                </Content>
                <Navigation />
            </ContentWrapper>
        </AppView>
    )
}