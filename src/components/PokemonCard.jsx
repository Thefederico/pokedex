import { StarOutlined } from '@ant-design/icons'
import { Card } from 'antd'
import Meta from 'antd/lib/card/Meta'

function PokemonCard ({ name }) {
  return (
    <Card
      title={name}
      cover={
        <img
          alt='Ditto'
          src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/132.png'
        />
      }
      extra={<StarOutlined />}
    >
      <Meta description='Fire, magic' />
    </Card>
  )
}

export { PokemonCard }
