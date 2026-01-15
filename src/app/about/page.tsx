'use client';

import React from 'react';
import Link from 'next/link';

export default function AboutPage() {
    return (
        <div className="container animate-fade-in" style={{ maxWidth: '1200px', margin: '0 auto', padding: '40px 20px' }}>

            <div style={{
                background: 'white',
                padding: '40px',
                borderRadius: '20px',
                boxShadow: '0 4px 20px rgba(0,0,0,0.05)',
                color: 'var(--text-color)'
            }}>
                <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', gap: '4rem' }}>

                    {/* Left Column (Was Right): Profile */}
                    <div style={{ flex: '1 1 400px', paddingTop: '0px' }}>

                        {/* Profile Image */}
                        <div style={{ textAlign: 'center', marginBottom: '20px' }}>
                            <img
                                src="/saya_profile.png"
                                alt="Saya"
                                style={{
                                    width: '150px',
                                    height: 'auto',
                                    borderRadius: '50%',
                                    maxWidth: '100%'
                                }}
                            />
                        </div>

                        <div style={{
                            background: '#fcfcfc',
                            padding: '30px',
                            borderRadius: '15px',
                            border: '1px solid #eee'
                        }}>
                            <div style={{ fontSize: '1.1rem', lineHeight: '2.2', marginBottom: '2em' }}>
                                <p style={{ marginBottom: '1.5em' }}>
                                    みなさん、こんにちは。日本語教師として5年目になるSayaです。<br />
                                    日本語学校での指導経験を経て、現在はオンラインを中心に日本語を教えています。
                                </p>
                                <p style={{ marginBottom: '1.5em' }}>
                                    授業では、学習者の皆さんの達成感と満足感を大切にしており、このサイトもその想いから作りました。
                                </p>
                                <p style={{ marginBottom: '1.5em' }}>
                                    仕事も、子育ても、友達との時間も、趣味や自分自身の学びも、できるだけ楽しみたいと思っています。うまくいかないことや大変なこともありますが、世界中のさまざまな人と出会い、つながれるこの仕事が大好きです。
                                </p>
                                <p style={{ marginBottom: '1.5em' }}>
                                    このサイトが、みなさんの日本語指導そして学習の助けになればうれしいです。<br />
                                    どうぞよろしくお願いします。
                                </p>
                            </div>

                            <div style={{ borderTop: '2px solid var(--accent-red)', paddingTop: '20px' }}>
                                <h3 style={{ color: 'var(--accent-red)', marginBottom: '10px', fontSize: '1.3rem' }}>Saya</h3>
                                <p style={{ fontSize: '0.95rem', lineHeight: '1.8', color: '#555' }}>
                                    オンライン日本語教師。1500レッスン達成。<br />
                                    2021年　日本語教育能力検定試験　合格<br />
                                    2022年　日本語教師養成講座420時間　修了<br />
                                    2024年　日本語教員試験　合格<br />
                                    2025年　登録日本語教員
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Right Column (Was Left): For Teachers */}
                    <div style={{ flex: '1 1 500px' }}>
                        <h1 style={{
                            textAlign: 'center',
                            marginBottom: '40px',
                            color: 'var(--accent-red)',
                            fontFamily: 'var(--font-heading)',
                            fontSize: '2.5rem'
                        }}>
                            For teachers
                        </h1>

                        <div style={{ fontSize: '1.2rem', lineHeight: '2.5', textAlign: 'justify', textJustify: 'inter-ideograph' }}>
                            <p style={{ marginBottom: '2em' }}>
                                このサイトは「楽しく学ぶ＝楽習(がくしゅう)」という意味を込めて「楽(がく)」と名付けました。<br />
                                <br />
                                レッスンで使用できる「こんな読み物がほしい！」を詰め込みました。<br />
                                学習者のレベルに合わせた読み物でレッスンができるため、楽しみながら練習や復習ができ、学習者の「読める」「分かる」を引き出せるものになっています。
                            </p>

                            <p style={{ marginBottom: '2em' }}>
                                そして、「楽」は「らく」とも読めますね。<br />
                                日本語教師なら一度は「教材を作る時間が足りない」<br />
                                「レッスンですぐ使える教材がほしい」と思ったことがあるのではないでしょうか。
                            </p>

                            <p style={{ marginBottom: '2em' }}>
                                このサイトは準備なし、または最小限の準備ですぐレッスンに使える教材を揃えています。<br />
                                内容もそのまま授業に取り入れやすく、練習や復習に自然につなげられます。
                            </p>

                            <p>
                                その他楽しいコンテンツも盛りだくさんです。余った時間やアイスブレイクにお使いください。<br />
                                <br />
                                忙しい日本語教師の皆さんの準備時間を短縮し、授業をもっと楽に、もっと楽しくすることを目指して作りました。<br />
                                どうぞご利用ください。<br />
                                わたしの作ったものが日本語教師の仲間たちのお役に立てると幸いです。
                            </p>
                        </div>
                    </div>

                </div>

                <div style={{ marginTop: '50px', textAlign: 'center' }}>
                    <Link href="/" style={{
                        display: 'inline-block',
                        padding: '12px 30px',
                        background: 'var(--accent-red)',
                        color: 'white',
                        textDecoration: 'none',
                        borderRadius: '30px',
                        fontWeight: 'bold',
                        transition: 'transform 0.2s',
                        boxShadow: '0 4px 10px rgba(229, 57, 53, 0.3)'
                    }}>
                        トップページへ戻る
                    </Link>
                </div>
            </div>
        </div>
    );
}
