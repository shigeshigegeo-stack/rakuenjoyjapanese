import React from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: '利用規約 | 楽 ～Enjoy Japanese～',
    description: '利用規約ページです。',
};

export default function TermsPage() {
    return (
        <div className="container" style={{ padding: '4rem 2rem', maxWidth: '800px' }}>
            <h1 style={{
                textAlign: 'center',
                marginBottom: '4rem',
                fontSize: '2rem',
                borderBottom: '1px solid var(--accent-red)',
                paddingBottom: '1rem',
                display: 'inline-block',
                position: 'relative',
                left: '50%',
                transform: 'translateX(-50%)'
            }}>
                利用規約
            </h1>

            <div style={{ lineHeight: '1.8', fontSize: '1rem' }}>
                <section style={{ marginBottom: '3rem' }}>
                    <p style={{ marginBottom: '1.5rem' }}>
                        この利用規約（以下，「本規約」といいます。）は，楽 ～Enjoy Japanese～（以下，「当サービス」といいます。）がこのウェブサイト上で提供するサービス（以下，「本サービス」といいます。）の利用条件を定めるものです。登録ユーザーの皆さま（以下，「ユーザー」といいます。）には，本規約に従って，本サービスをご利用いただきます。
                    </p>
                </section>

                <section style={{ marginBottom: '3rem' }}>
                    <h2 style={{ fontSize: '1.4rem', marginBottom: '1.5rem', color: 'var(--primary-color)' }}>第1条（適用）</h2>
                    <ol style={{ listStylePosition: 'inside', paddingLeft: '1rem' }}>
                        <li style={{ marginBottom: '0.5rem' }}>本規約は，ユーザーと当サービスとの間の本サービスの利用に関わる一切の関係に適用されるものとします。</li>
                        <li style={{ marginBottom: '0.5rem' }}>当サービスは本サービスに関し，本規約のほか，ご利用にあたってのルール等，各種の定め（以下，「個別規定」といいます。）をすることがあります。これら個別規定はその名称のいかんに関わらず，本規約の一部を構成するものとします。</li>
                        <li style={{ marginBottom: '0.5rem' }}>本規約の規定が前項の個別規定の規定と矛盾する場合には，個別規定において特段の定めなき限り，個別規定の規定が優先されるものとします。</li>
                    </ol>
                </section>

                <section style={{ marginBottom: '3rem' }}>
                    <h2 style={{ fontSize: '1.4rem', marginBottom: '1.5rem', color: 'var(--primary-color)' }}>第2条（禁止事項）</h2>
                    <p style={{ marginBottom: '1rem' }}>ユーザーは，本サービスの利用にあたり，以下の行為をしてはなりません。</p>
                    <ul style={{ listStylePosition: 'inside', paddingLeft: '1rem' }}>
                        <li style={{ marginBottom: '0.5rem' }}>法令または公序良俗に違反する行為</li>
                        <li style={{ marginBottom: '0.5rem' }}>犯罪行為に関連する行為</li>
                        <li style={{ marginBottom: '0.5rem' }}>本サービスの内容等，本サービスに含まれる著作権，商標権ほか知的財産権を侵害する行為</li>
                        <li style={{ marginBottom: '0.5rem' }}>当サービス，ほかのユーザー，またはその他第三者のサーバーまたはネットワークの機能を破壊したり，妨害したりする行為</li>
                        <li style={{ marginBottom: '0.5rem' }}>本サービスによって得られた情報を商業的に利用する行為</li>
                        <li style={{ marginBottom: '0.5rem' }}>当サービスのサービスの運営を妨害するおそれのある行為</li>
                        <li style={{ marginBottom: '0.5rem' }}>不正アクセスをし，またはこれを試みる行為</li>
                        <li style={{ marginBottom: '0.5rem' }}>他のユーザーに成りすます行為</li>
                        <li style={{ marginBottom: '0.5rem' }}>その他，当サービスが不適切と判断する行為</li>
                    </ul>
                </section>

                <section style={{ marginBottom: '3rem' }}>
                    <h2 style={{ fontSize: '1.4rem', marginBottom: '1.5rem', color: 'var(--primary-color)' }}>第3条（本サービスの提供の停止等）</h2>
                    <p style={{ marginBottom: '1rem' }}>
                        当サービスは，以下のいずれかの事由があると判断した場合，ユーザーに事前に通知することなく本サービスの全部または一部の提供を停止または中断することができるものとします。
                    </p>
                    <ul style={{ listStylePosition: 'inside', paddingLeft: '1rem' }}>
                        <li style={{ marginBottom: '0.5rem' }}>本サービスにかかるコンピュータシステムの保守点検または更新を行う場合</li>
                        <li style={{ marginBottom: '0.5rem' }}>地震，落雷，火災，停電または天災などの不可抗力により，本サービスの提供が困難となった場合</li>
                        <li style={{ marginBottom: '0.5rem' }}>コンピュータまたは通信回線等が事故により停止した場合</li>
                        <li style={{ marginBottom: '0.5rem' }}>その他，当サービスが本サービスの提供が困難と判断した場合</li>
                    </ul>
                </section>

                <section style={{ marginBottom: '3rem' }}>
                    <h2 style={{ fontSize: '1.4rem', marginBottom: '1.5rem', color: 'var(--primary-color)' }}>第4条（利用制限および登録抹消）</h2>
                    <p>
                        当サービスは，ユーザーが本規約のいずれかの条項に違反した場合，事前の通知なく，ユーザーに対して本サービスの利用を制限し，またはユーザーとしての登録を抹消することができるものとします。
                    </p>
                </section>

                <section style={{ marginBottom: '3rem' }}>
                    <h2 style={{ fontSize: '1.4rem', marginBottom: '1.5rem', color: 'var(--primary-color)' }}>第5条（保証の否認および免責事項）</h2>
                    <ol style={{ listStylePosition: 'inside', paddingLeft: '1rem' }}>
                        <li style={{ marginBottom: '0.5rem' }}>当サービスは，本サービスに事実上または法律上の瑕疵（安全性，信頼性，正確性，完全性，有効性，特定の目的への適合性，セキュリティなどに関する欠陥，エラーやバグ，権利侵害などを含みます。）がないことを明示的にも黙示的にも保証しておりません。</li>
                        <li style={{ marginBottom: '0.5rem' }}>当サービスは，本サービスに起因してユーザーに生じたあらゆる損害について、当サービスの故意又は重過失による場合を除き、一切の責任を負いません。</li>
                    </ol>
                </section>

                <section style={{ marginBottom: '3rem' }}>
                    <h2 style={{ fontSize: '1.4rem', marginBottom: '1.5rem', color: 'var(--primary-color)' }}>第6条（サービス内容の変更等）</h2>
                    <p>
                        当サービスは，ユーザーへの事前の告知をもって、本サービスの内容を変更、追加または廃止することがあり、ユーザーはこれを承諾するものとします。
                    </p>
                </section>

                <section style={{ marginBottom: '3rem' }}>
                    <h2 style={{ fontSize: '1.4rem', marginBottom: '1.5rem', color: 'var(--primary-color)' }}>第7条（利用規約の変更）</h2>
                    <p>
                        当サービスは以下の場合には、ユーザーの個別の同意を要せず、本規約を変更することができるものとします。
                    </p>
                    <ol style={{ listStylePosition: 'inside', paddingLeft: '1rem', marginTop: '1rem' }}>
                        <li style={{ marginBottom: '0.5rem' }}>本規約の変更がユーザーの一般の利益に適合するとき。</li>
                        <li style={{ marginBottom: '0.5rem' }}>本規約の変更が本サービス利用契約の目的に反せず、かつ、変更の必要性、変更後の内容の相当性その他の変更に係る事情に照らして合理的なものであるとき。</li>
                    </ol>
                </section>

                <section style={{ marginBottom: '3rem' }}>
                    <h2 style={{ fontSize: '1.4rem', marginBottom: '1.5rem', color: 'var(--primary-color)' }}>第8条（個人情報の取扱い）</h2>
                    <p>
                        当サービスは，本サービスの利用によって取得する個人情報については，当サービス「プライバシーポリシー」に従い適切に取り扱うものとします。
                    </p>
                </section>

                <section style={{ marginBottom: '3rem' }}>
                    <h2 style={{ fontSize: '1.4rem', marginBottom: '1.5rem', color: 'var(--primary-color)' }}>第9条（準拠法・裁判管轄）</h2>
                    <ol style={{ listStylePosition: 'inside', paddingLeft: '1rem' }}>
                        <li style={{ marginBottom: '0.5rem' }}>本規約の解釈にあたっては，日本法を準拠法とします。</li>
                        <li style={{ marginBottom: '0.5rem' }}>本サービスに関して紛争が生じた場合には，当サービスの所在地を管轄する裁判所を専属的合意管轄とします。</li>
                    </ol>
                </section>
            </div>
        </div>
    );
}
