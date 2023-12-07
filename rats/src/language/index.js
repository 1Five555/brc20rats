import React from "react";

export const language = {
    zh: {
        menu:['社区','购买'],
        banner:{
            bigTitle:'购买 Rats',
            smallTitle:'购买购买购买',
            btn:'购买 Rats'
        },
        info:{
            btc:{
                small:'什么是比特币铭文',
                big:'BRC-20介绍',
                content:'BRC20是比特幣網絡上發行同質化代幣的實驗性格式標準，由推特用戶@domodata於2023年3月8日基於Ordinal協議創建。類似於以太坊的ERC20標準，它規定了以太坊上發行代幣的名稱、發行量、轉帳等功能，所有基於以太坊開發的代幣合約都遵守這個標準。'
            },
            rats:{
                small:'老鼠介绍',
                big:'RATS',
                content:'创新资产类别：$Rats是一种在比特币区块链上使用BRC-20协议创造的独特动物主题加密资产。它提供了激动人心的比特币领城新入口，具有重大的财富转移潜力。早期投资，巨大潜力-加密世界早起者的黃金机会，作为BRC-20领先的加密资产，$rats有可能超越基于ERC的狗狗币市值，得益于其强大的社区支持。画无“拉地毯”风险：$rats代币没有合约，无法修改。没有项目國队参与，确保了无拉地毯风险。总供应量为一万亿个代币，价格亲民，极易引发FOMO，赋予其高度的模因潜力。'
            }
        },
        core:{
            small:'核心价值观',
            big:'什么是老鼠精神',
            content:'Meme龙头出现了！$RATS！在这个不是机构割韭菜的时代，韭菜们，挺起双手，捍卫自己的利益！\n' +
                '\n' +
                '$RATS 社区，虽然会有败类，但别让那些搅屎棍影响你。冲啊，不要再让那些XX的败类破坏我们的社区。在web3中，我们一直是韭菜，但这是一个高度社区化的项目，别再让那帮XX的败类破坏它。\n' +
                '\n' +
                '韭菜们，冲啊！为了你的利益，为了自由！挺起你的手，向前冲！'
        }
    },
    en: {
        menu:['Community','Buy'],
        banner:{
            bigTitle:'BUY Rats',
            smallTitle:'buy buy buy',
            btn:'BUY Rats'
        },
        info:{
            btc:{
                small:'What is Bitcoin Inscription',
                big:'BRC-20',
                content:'BRC20 is an experimental format standard for issuing fungible tokens on the Bitcoin network. It was created by Twitter user @domodata on March 8, 2023 based on the Ordinal protocol. Similar to Ethereum\'s ERC20 standard, it stipulates the names, issuance amounts, transfers and other functions of tokens issued on Ethereum. All token contracts developed based on Ethereum comply with this standard.'
            },
            rats:{
                small:'Rats introduction',
                big:'Rats',
                content:'Innovative Asset Class: $Rats are a unique animal-themed crypto-asset created on the Bitcoin blockchain using the BRC-20 protocol. It provides an exciting new entry into the world of Bitcoin, with significant wealth transfer potential. Early investment, huge potential - a golden opportunity for early risers in the crypto world, as the leading BRC-20 crypto asset, $rats has the potential to surpass the ERC-based Dogecoin market cap, thanks to its strong community support. There is no risk of "pulling the carpet": $rats tokens have no contracts and cannot be modified. There is no national team involved in the project, ensuring that there is no risk of pulling the rug out. The total supply is one trillion tokens, the price is affordable, and it can easily trigger FOMO, giving it a high degree of memetic potential.'
            }
        }
    }
};
export const LanguageContext = React.createContext(language.zh);