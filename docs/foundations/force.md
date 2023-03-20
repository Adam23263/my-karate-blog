```

---
head:
  - - link
    - rel: stylesheet
      href: https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.5.1/katex.min.css
---
add to config.js
    
    markdown: {
      config: (md) => {
        md.use(require("markdown-it-katex"));
      },
    },


```

# Impact force and momentum


&emsp; What is force, well first of that's why it hurts when you get hit, more force more pain. In terms of physics force is explained as *"an influence that causes the motion of an object with mass to change its velocity"* in others words what makes things move. It is defined by Isaac Newton as the product of the mass of an object and its acceleration;
$$ \vec{F} = m \cdot \vec{a} $$  
which essentially means the faster you throw a ball the harder it hits. 

&emsp; There is also a force that comes from an impact between two objects called the impact force which it represented by the rate of change in the momentum of the object,<br> where momentum is the product of mass and velocity(speed) and time is how long the impact lasted;
$$ F_{imp} = \frac{\Delta \rho}{\Delta t} = \frac{d}{dt}(m\vec{v})$$

&emsp; How does this relate to karate? lets look at an simple example of hitting a stationary object (with basic physics). So we have our foot that weights 1Kg moving at 20m/s and a object at 0.5Kg with an impact time of 0.2s.

momentum before the impact:
$$ \rho_{foot} = m_1 \cdot u_1 =   1 \cdot 20 = 20kgms^{-1} $$
$$ \rho_{obj} = m_2 \cdot u_2 = 0.5 \cdot 0 = 0 $$  
$$ \Sigma \rho_{before} = 20kgms^{-1}$$

momentum after the impact:
$$ \rho_{foot} = m_1 \cdot v_1 =   1 \cdot 10 = 10kgms^{-1} $$
$$ \rho_{obj} = m_2 \cdot v_2 = 0.5 \cdot v_2 $$  
$$ \Sigma \rho_{after} = 10 + 0.5 \cdot v_2 $$

By a law of motion that states momentum is conserved 
$$ \rho_{before} = \rho_{after} $$ 
$$ 20 = 0.5 \cdot v_2 \rightarrow v_2 = 10ms^{-1}$$ 
$$ \rho_{obj} = 10 kgms^{-1} $$

impact force:
$$ F_{imp} = \frac{\Delta \rho_{obj}}{\Delta t} = \frac{10-0}{0.2} = 50N $$
<br><br>

## TLDR;

&emsp; So what does this mean? This shows us that impact force is dependent on speed and time, and in order to increase this force we can either increase our striking speed or reduce the impact time.