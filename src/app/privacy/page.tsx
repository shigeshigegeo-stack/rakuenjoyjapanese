import React from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'プライバシーポリシー | 楽 ～Enjoy Japanese～',
    description: '個人情報の取り扱いについて説明します。',
};

export default function PrivacyPage() {
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
                プライバシーポリシー
            </h1>

            <div style={{ lineHeight: '1.8', fontSize: '1rem' }}>
                <p style={{ marginBottom: '2rem' }}>
                    楽 ～Enjoy Japanese～（以下，「当サービス」といいます。）は，本ウェブサイト上で提供するサービス（以下，「本サービス」といいます。）における，ユーザーの個人情報の取扱いについて，以下のとおりプライバシーポリシー（以下，「本ポリシー」といいます。）を定めます。
                </p>

                <section style={{ marginBottom: '3rem' }}>
                    <h2 style={{ fontSize: '1.4rem', marginBottom: '1.5rem', color: 'var(--primary-color)' }}>第1条（個人情報）</h2>
                    <p>
                        「個人情報」とは，個人情報保護法にいう「個人情報」を指すものとし，生存する個人に関する情報であって，当該情報に含まれる氏名，生年月日，住所，電話番号，連絡先その他の記述等により特定の個人を識別できる情報及び容貌，指紋，声紋にかかるデータ，及び健康保険証の保険者番号などの当該情報単体から特定の個人を識別できる情報（個人識別情報）を指します。
                    </p>
                </section>

                <section style={{ marginBottom: '3rem' }}>
                    <h2 style={{ fontSize: '1.4rem', marginBottom: '1.5rem', color: 'var(--primary-color)' }}>第2条（個人情報の収集方法）</h2>
                    <p>
                        当サービスは，ユーザーが利用登録をする際に氏名，生年月日，住所，電話番号，メールアドレス，銀行口座番号，クレジットカード番号，運転免許証番号などの個人情報をお尋ねすることがあります。また，ユーザーと提携先などとの間でなされたユーザーの個人情報を含む取引記録や決済に関する情報を,当サービスの提携先（情報提供元，広告主，広告配信先などを含みます。以下，｢提携先｣といいます。）などから収集することがあります。
                    </p>
                </section>

                <section style={{ marginBottom: '3rem' }}>
                    <h2 style={{ fontSize: '1.4rem', marginBottom: '1.5rem', color: 'var(--primary-color)' }}>第3条（個人情報を収集・利用する目的）</h2>
                    <p style={{ marginBottom: '1rem' }}>当サービスが個人情報を収集・利用する目的は，以下のとおりです。</p>
                    <ol style={{ listStylePosition: 'inside', paddingLeft: '1rem' }}>
                        <li style={{ marginBottom: '0.5rem' }}>当サービスサービスの提供・運営のため</li>
                        <li style={{ marginBottom: '0.5rem' }}>ユーザーからのお問い合わせに回答するため（本人確認を行うことを含む）</li>
                        <li style={{ marginBottom: '0.5rem' }}>ユーザーが利用中のサービスの新機能，更新情報，キャンペーン等及び当サービスが提供する他のサービスの案内のメールを送付するため</li>
                        <li style={{ marginBottom: '0.5rem' }}>メンテナンス，重要なお知らせなど必要に応じたご連絡のため</li>
                        <li style={{ marginBottom: '0.5rem' }}>利用規約に違反したユーザーや，不正・不当な目的でサービスを利用しようとするユーザーの特定をし，ご利用をお断りするため</li>
                        <li style={{ marginBottom: '0.5rem' }}>ユーザーにご自身の登録情報の閲覧や変更，削除，ご利用状況の閲覧を行っていただくため</li>
                        <li style={{ marginBottom: '0.5rem' }}>有料サービスにおいて，ユーザーに利用料金を請求するため</li>
                        <li style={{ marginBottom: '0.5rem' }}>上記の利用目的に付随する目的</li>
                    </ol>
                </section>

                <section style={{ marginBottom: '3rem' }}>
                    <h2 style={{ fontSize: '1.4rem', marginBottom: '1.5rem', color: 'var(--primary-color)' }}>第4条（利用目的の変更）</h2>
                    <ol style={{ listStylePosition: 'inside', paddingLeft: '1rem' }}>
                        <li style={{ marginBottom: '0.5rem' }}>当サービスは，利用目的が変更前と関連性を有すると合理的に認められる場合に限り，個人情報の利用目的を変更するものとします。</li>
                        <li style={{ marginBottom: '0.5rem' }}>利用目的の変更を行った場合には，変更後の目的について，当サービス所定の方法により，ユーザーに通知し，または本ウェブサイト上に公表するものとします。</li>
                    </ol>
                </section>

                <section style={{ marginBottom: '3rem' }}>
                    <h2 style={{ fontSize: '1.4rem', marginBottom: '1.5rem', color: 'var(--primary-color)' }}>第5条（個人情報の第三者提供）</h2>
                    <p style={{ marginBottom: '1rem' }}>
                        当サービスは，次に掲げる場合を除いて，あらかじめユーザーの同意を得ることなく，第三者に個人情報を提供することはありません。ただし，個人情報保護法その他の法令で認められる場合を除きます。
                    </p>
                    <ol style={{ listStylePosition: 'inside', paddingLeft: '1rem' }}>
                        <li style={{ marginBottom: '0.5rem' }}>人の生命，身体または財産の保護のために必要がある場合であって，本人の同意を得ることが困難であるとき</li>
                        <li style={{ marginBottom: '0.5rem' }}>公衆衛生の向上または児童の健全な育成の推進のために特に必要がある場合であって，本人の同意を得ることが困難であるとき</li>
                        <li style={{ marginBottom: '0.5rem' }}>国の機関もしくは地方公共団体またはその委託を受けた者が法令の定める事務を遂行することに対して協力する必要がある場合であって，本人の同意を得ることにより当該事務の遂行に支障を及ぼすおそれがあるとき</li>
                        <li style={{ marginBottom: '0.5rem' }}>予め次の事項を告知あるいは公表し，かつ当サービスが個人情報保護委員会に届出をしたとき</li>
                    </ol>
                </section>

                <section style={{ marginBottom: '3rem' }}>
                    <h2 style={{ fontSize: '1.4rem', marginBottom: '1.5rem', color: 'var(--primary-color)' }}>第6条（プライバシーポリシーの変更）</h2>
                    <ol style={{ listStylePosition: 'inside', paddingLeft: '1rem' }}>
                        <li style={{ marginBottom: '0.5rem' }}>本ポリシーの内容は，法令その他本ポリシーに別段の定めのある事項を除いて，ユーザーに通知することなく，変更することができるものとします。</li>
                        <li style={{ marginBottom: '0.5rem' }}>当サービスが別途定める場合を除いて，変更後のプライバシーポリシーは，本ウェブサイトに掲載したときから効力を生じるものとします。</li>
                    </ol>
                </section>

                <section style={{ marginBottom: '3rem' }}>
                    <h2 style={{ fontSize: '1.4rem', marginBottom: '1.5rem', color: 'var(--primary-color)' }}>第7条（お問い合わせ窓口）</h2>
                    <p>
                        本ポリシーに関するお問い合わせは，下記の窓口までお願いいたします。
                    </p>
                    <div style={{ marginTop: '1rem', padding: '1.5rem', backgroundColor: 'rgba(255,255,255,0.5)', borderRadius: '8px' }}>
                        <p>運営者：楽 ～Enjoy Japanese～ 運営事務局</p>
                        {/* <p>Eメールアドレス：[メールアドレス]</p> */}
                    </div>
                </section>

            </div>
        </div>
    );
}
