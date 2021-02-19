import {Entity, PrimaryGeneratedColumn, Column, CreateDateColumn} from "typeorm";

@Entity({name:"characters"})
export default class Characters {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    accountid: number;

    @Column()
    world: number;

    @Column()
    name: string;

    @Column()
    level:number;

    @Column()
    exp: number;

    @Column()
    gachaexp:number;

    @Column()
    str:number;

    @Column()
    dex:number;

    @Column()
    luk:number;

    @Column()
    int:number;

    @Column()
    hp:number;

    @Column()
    mp:number;

    @Column()
    maxhp:number;

    @Column()
    maxmp:number;

    @Column()
    mesos:number;

    @Column()
    hpMpUsed:number;

    @Column()
    job:number;

    @Column()
    skinColor:number;

    @Column()
    gender:number;

    @Column()
    fame:number;

    @Column()
    fquest:number;

    @Column()
    hair:number;

    @Column()
    face:number;

    @Column()
    ap:number;

    @Column()
    sp: string;

    @Column()
    map: number;

    @Column()
    spawnpoint:number;

    @Column()
    gm:number;

    @Column()
    party:number;

    @Column()
    buddyCapacity:number;

    @CreateDateColumn({ type: "timestamp", precision: 0, default: () => "CURRENT_TIMESTAMP" })
    createdate:Date;

    @Column()
    rank:number;

    @Column()
    rankMove:number;

    @Column()
    jobRank:number;

    @Column()
    jobRankMove:number;

    @Column()
    guildid:number;

    @Column()
    guildrank:number;

    @Column()
    messengerid:number;

    @Column()
    messengerposition:number;

    @Column()
    mountlevel:number;

    @Column()
    mountexp:number;

    @Column()
    mounttiredness:number;

    @Column()
    omokwins:number;

    @Column()
    omoklosses:number;

    @Column()
    matchcardwins:number;

    @Column()
    matchcardlosses:number;

    @Column()
    matchcardties:number;

    @Column()
    MerchantMesos:number;

    @Column()
    HasMerchant:number;

    @Column()
    equipslots:number;

    @Column()
    useslots:number;

    @Column()
    setupslots:number;

    @Column()
    etcslots:number;

    @Column()
    familyId:number;

    @Column()
    monsterbookcover:number;

    @Column()
    allianceRank:number;

    @Column()
    vanquisherStage:number;

    @Column()
    ariantPoints:number;

    @Column()
    dojoPoints:number;

    @Column()
    lastDojoStage:number;

    @Column()
    finishedDojoTutorial:number;

    @Column()
    vanquisherKills:number;

    @Column()
    summonValue:number;

    @Column()
    partnerId:number;

    @Column()
    marriageItemId:number;

    @Column()
    reborns:number;

    @Column()
    PQPoints:number;

    @Column()
    datastring:string;

    @CreateDateColumn({ type: "timestamp", precision: 0})
    lastLogoutTime:Date

    @CreateDateColumn({ type: "timestamp", precision: 0})
    lastExpGainTime:Date

    @Column()
    partySearch:number;

    @Column()
    jailexpire:number
    


}


