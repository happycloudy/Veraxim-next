import Head from './head'
import Footer from './footer'
import Header from './header'

export default function Description() {
  return (
    <div className ="container">
    <Header/>
    <div className="container" style={{width: "50vw"}}>
    <Head title="Описание | Veraxim"/>
    
    <div className="row description mt-5" >
      <div className="text col">
      На современном этапе развития для жизнеобеспечения человека огромное количество проблем решаются с применением биотехнологических методов. Наиболее важной из них является балансировка кормов и комбикормов путем введения микробного белка. Вклад биотехнологии в обеспечение кормами сельскохозяйственных животных осуществляется в основном за счет микробиологической конверсии отходов пищевых производств, сельскохозяйственных отходов, отходов деревообрабатывающей промышленности. Корма растительного происхождения составляют основу рационов всех видов сельскохозяйственных животных и птицы, а несбалансированность рационов по белку приводит к перерасходу кормов, усугубляя тем самым их дефицит.
      <br/>
      <br/>
      В нашей стране проблема белкового дефицита решалась путем создания крупнотоннажного производства кормовых дрожжей на углеводородном и растительном сырье. Однако, технико-экономический анализ крупнотоннажных производств, ориентированных на выпуск кормовых дрожжей на основе целлюлозосодержащего сырья, и мировая биотехнологическая практика показывают, что повышение рентабельности этих производств возможно только при переходе на комплексный вариант переработки сырья, в том числе вторичного, и получаемой биомассы с выпуском продуктов фармацевтического, пищевого и кормового назначения при одновременном сокращении отходов за счет создания малоотходных технологических процессов.
      <br/>
      <br/>
      Основным недостатком современных технологий в получении микробного белка является дифференцированность подходов, которые диктуются большим разнообразием видов растительного сырья, их различий в химических и физических свойствах. Например, при переработке свекловичного жома для увеличения содержания протеина и снижения содержания клетчатки в свекловичном жоме разработан способ микробиологической обработки сырого жома по технологии твердофазной биоферментации и последующим высушиванием. Технология производства ферментированных кормов включает в себя: приготовление засевной закваски в ферментере из пшеничных отрубей и закваски Леснова в количестве 5 г на 1 т с одновременным увлажнением массы до 60 % и нагревом до 55 град. С; измельчение свекловичного жома молотковой дробилкой и подачу его в ферментер нагрев свекловичного жома до температуры 55 град. С и выгрузку приготовленной засевной закваски в ферментер с одновременным интенсивным перемешиванием в течение 10-15 мин;  ферментацию измельченного свекловичного жома в течение 9 ч и выгрузку готового продукта. Испытания проводились на Шебекинском биохимическом заводе (Белгородская область). Результаты показали уменьшение количества клетчатки на 18 % и увеличение содержания протеина на 125%. На основании полученных данных был принят запуск пилотного проекта по производству высокобелковых кормов из сырого свекловичного жома. Для этого было разработано и скомплектовано специальное оборудование.
      <br/>
      <br/>
      Стоит отметить, что в настоящее время производство микробного белка является низкорентабельным, наиболее перспективными направлениями в биоконверсии растительного сырья являются технологии, обеспечивающие безотходность или малоотходность производства, увеличение выхода и повышение качества продуктов при возможно более простом аппаратурном оформлении, особенно при рассмотрении малых и средних фермерских хозяйств.
      <br/>
      <br/>
      Решением этих проблем может стать новая малоотходная технология получения растительного углеводно-белкового продукта с использованием гетерофазной глубинной ферментации подобранных штаммов дрожжей рода Candida на углеводных средах, полученных после предварительной подготовки измельченных отходов. Культивирование этих штаммов в присутствии твердой фазы обеспечивает хорошую фильтруемость получаемых суспензий, а дальнейшая переработка осадка по малоэнергоемкой технологии позволяет получать продукт, используемый для балансировки кормов по сырому протеину.  Реализуемая в данном способе методика по культивированию в отъемно-доливном режиме с одновременной рециркуляцией фильтрата приводит к получению популяции с высокой плотностью без ухудшения показателей фильтрации постферментационной суспензии. Содержание сырого протеина в готовом продукте, полученном из суспензий, находится на уровне 45-50%АСВ. Основными стадиями данной технологии являются: предварительная подготовка отходов переработки растительного сырья; глубинное гетерофазное культивирование микроорганизмов и фильтрование постферментационной суспензии.
      </div>
    </div>
    </div>
    <Footer/>



    <style jsx>{`
      .description{
        background-color: rgba(255,255,255,.8);
      }
      .text{
        padding: 10px 10px 10px 10px;
      }
    `}
    </style>

    <style jsx global>{`
      body{
        background: url(descrBg.webp) no-repeat;
        background-size: cover;
        margin: 0;
        padding: 0;

        font: normal normal 14px Arial,Helvetica,sans-serif;
        color: #454545;
        text-decoration: none;
        text-align: left;
        line-height: 24px;
        margin: 0px 0px 0px 0px;
        padding: 0px 0px 0px 0px;
        text-transform: none;
        font-size: 14px;
      }
    `}
    </style>
    </div>
  )
}

